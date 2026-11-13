'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import type { ElementType, MouseEvent, ReactNode } from 'react'
import { EMAIL } from '@/lib/site'

/*
  Small client layer shared by every page: the copy-email messages and smooth
  scrolling. Pages stay server components; interactive elements are rendered
  through <Act> and message text through <Hole>.
*/

type Msgs = Record<string, string>
type Ctx = { msgs: Msgs; run: (name: string, e: MouseEvent<HTMLElement>) => void }

const DcContext = createContext<Ctx>({ msgs: {}, run: () => {} })

const reduced = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function legacyCopy(text: string) {
  let ok = false
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.top = '0'
    ta.style.left = '-9999px'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    ta.setSelectionRange(0, text.length)
    ok = document.execCommand('copy')
    document.body.removeChild(ta)
  } catch {
    ok = false
  }
  return ok
}

// Which message slot and text each design handler uses.
const COPY: Record<string, [string, string]> = {
  copyMail: ['mailMsg', 'Copied!'],
  copyTalkA: ['talkA', 'Email Copied!'],
  copyTalkB: ['talkB', 'Email Copied!'],
  copyTalk: ['talkMsg', 'Email Copied!'],
}

export function DcProvider({ children }: { children: ReactNode }) {
  const [msgs, setMsgs] = useState<Msgs>({})
  const timers = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  useEffect(() => {
    const t = timers.current
    return () => Object.values(t).forEach(clearTimeout)
  }, [])

  const copy = useCallback((key: string, okMsg: string) => {
    const show = (ok: boolean) => {
      setMsgs((m) => ({ ...m, [key]: ok ? okMsg : 'Copy failed' }))
      clearTimeout(timers.current[key])
      timers.current[key] = setTimeout(() => setMsgs((m) => ({ ...m, [key]: '' })), 2200)
    }
    try {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(EMAIL).then(
          () => show(true),
          () => show(legacyCopy(EMAIL)),
        )
        return
      }
    } catch {}
    show(legacyCopy(EMAIL))
  }, [])

  const run = useCallback(
    (name: string, e: MouseEvent<HTMLElement>) => {
      if (COPY[name]) {
        e.preventDefault()
        copy(...COPY[name])
        return
      }
      if (name === 'go') {
        const h = (e.currentTarget as HTMLElement).getAttribute('href') || ''
        const el = h.charAt(0) === '#' ? document.getElementById(h.slice(1)) : null
        if (!el) return
        e.preventDefault()
        el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' })
        return
      }
      if (name === 'toTop') {
        e.preventDefault()
        const el = document.getElementById('pg-top')
        if (el) el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' })
        try {
          window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' })
        } catch {}
      }
    },
    [copy],
  )

  return <DcContext.Provider value={{ msgs, run }}>{children}</DcContext.Provider>
}

/** An element whose click is handled by the page logic (copy, scroll). */
export function Act({
  as: Tag = 'a',
  name,
  ...rest
}: { as?: ElementType; name: string } & Record<string, unknown>) {
  const { run } = useContext(DcContext)
  const Comp = Tag as ElementType
  return <Comp {...rest} onClick={(e: MouseEvent<HTMLElement>) => run(name, e)} />
}

/** Live message text ("Copied!", "Email Copied!"). */
export function Hole({ name }: { name: string }) {
  const { msgs } = useContext(DcContext)
  return <>{msgs[name] || ''}</>
}

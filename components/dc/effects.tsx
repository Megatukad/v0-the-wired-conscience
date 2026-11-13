'use client'

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

const reduced = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Reveal on scroll (`.rv`): fade + 18px rise, 700ms, once. Off for reduced motion. */
export function Reveal() {
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return
    let rio: IntersectionObserver | undefined
    try {
      const vh = window.innerHeight || 0
      const els = document.querySelectorAll<HTMLElement>('.rv')
      rio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const t = e.target as HTMLElement
              t.style.opacity = ''
              t.style.translate = ''
              rio?.unobserve(t)
            }
          })
        },
        { threshold: 0.12 },
      )
      els.forEach((el) => {
        if (el.getBoundingClientRect().top > vh) {
          el.style.transition = 'opacity 700ms ease, translate 700ms cubic-bezier(.16,1,.3,1)'
          el.style.opacity = '0'
          el.style.translate = '0 18px'
          rio?.observe(el)
        }
      })
    } catch {}
    return () => rio?.disconnect()
  }, [])
  return null
}

/** Case section icons: staggered play on load, replay once when scrolled back into view. */
export function CaseIcons() {
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return
    let mio: IntersectionObserver | undefined
    try {
      const mis = document.querySelectorAll<HTMLElement>('.mi')
      mis.forEach((m, q) => {
        m.style.animationDelay = (q % 4) * 160 + 250 + 'ms'
        m.classList.add('play')
      })
      mio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            const t = e.target as HTMLElement
            if (!t.dataset.seen) {
              t.dataset.seen = e.isIntersecting ? 'in' : 'out'
              return
            }
            if (e.isIntersecting && t.dataset.seen === 'out') {
              t.style.animationDelay = '0ms'
              t.classList.remove('play')
              void t.offsetWidth
              t.classList.add('play')
              mio?.unobserve(t)
            }
          })
        },
        { threshold: 0.9 },
      )
      mis.forEach((m) => mio?.observe(m))
    } catch {}
    return () => mio?.disconnect()
  }, [])
  return null
}

/** Back-to-top: shown once the header has left the view, or the footer is in view. */
export function ToTop({ className, children }: { className?: string; children: ReactNode }) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    let tio: IntersectionObserver | undefined
    try {
      const head = document.querySelector('header')
      const foot = document.getElementById('contact')
      const seen = { h: false, f: false }
      tio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.target === head) seen.h = !e.isIntersecting
            else seen.f = e.isIntersecting
          })
          setOn(seen.h || seen.f)
        },
        { threshold: 0 },
      )
      if (head) tio.observe(head)
      if (foot) tio.observe(foot)
    } catch {}
    return () => tio?.disconnect()
  }, [])
  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`totop ${on ? 'on' : ''} ${className ?? ''}`}
      onClick={(e) => {
        e.preventDefault()
        const smooth = !reduced()
        const el = document.getElementById('pg-top')
        if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
        try {
          window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
        } catch {}
      }}
    >
      {children}
    </button>
  )
}

/** Home typed line: types and deletes random skills. Reduced motion shows "AI Fluency". */
const SKILLS = [
  'AI Fluency',
  'AI Workflow Design',
  'Prompt Engineering',
  'System Integration',
  'Product Operations',
  'System Thinking',
  'Technical Writing',
  'PRD Writing',
  'AI Assisted Product',
]

export function TypedText() {
  const [typed, setTyped] = useState(SKILLS[0])
  useEffect(() => {
    if (reduced()) return
    let i = 0
    let pos = SKILLS[0].length
    let mode: 'hold' | 'delete' | 'type' = 'hold'
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      let wait = 70
      if (mode === 'hold') {
        mode = 'delete'
        wait = 1800
      } else if (mode === 'delete') {
        pos -= 1
        wait = 30
        if (pos <= 0) {
          pos = 0
          let n = i
          while (n === i) n = Math.floor(Math.random() * SKILLS.length)
          i = n
          mode = 'type'
          wait = 380
        }
      } else {
        pos += 1
        wait = 74
        if (pos >= SKILLS[i].length) {
          mode = 'hold'
          wait = 0
        }
      }
      setTyped(SKILLS[i].slice(0, pos))
      timer = setTimeout(tick, wait)
    }
    timer = setTimeout(tick, 1800)
    return () => clearTimeout(timer)
  }, [])
  return <>{typed}</>
}

/** Portrait (home) and CV flip: a button that swaps two stacked layers. */
export function FlipButton({
  className,
  labelA,
  labelB,
  children,
}: {
  className?: string
  labelA: string
  labelB: string
  children: ReactNode
}) {
  const [real, setReal] = useState(false)
  return (
    <button
      type="button"
      className={`flip ${className ?? ''}`}
      data-real={real ? 'true' : 'false'}
      aria-label={real ? labelB : labelA}
      onClick={() => setReal((r) => !r)}
    >
      {children}
    </button>
  )
}

/** About: "Where I've worked" logo row steps left one logo every 2.6s. Pauses on hover or focus. */
export function LogoRow() {
  const timers = useRef<{ t?: ReturnType<typeof setInterval>; s?: ReturnType<typeof setTimeout> }>({})
  useEffect(() => {
    if (reduced()) return
    const win = document.querySelector<HTMLElement>('.lgw')
    const ul = win?.querySelector('ul')
    if (!win || !ul) return
    win.classList.add('run')
    let paused = false
    let busy = false
    const on = () => (paused = true)
    const off = () => (paused = false)
    win.addEventListener('mouseenter', on)
    win.addEventListener('mouseleave', off)
    win.addEventListener('focusin', on)
    win.addEventListener('focusout', off)
    const step = () => {
      if (paused || busy || document.hidden) return
      const first = ul.firstElementChild as HTMLElement | null
      if (!first) return
      const gap = parseFloat(window.getComputedStyle(ul).columnGap) || 0
      const d = first.getBoundingClientRect().width + gap
      busy = true
      ul.style.transition = 'transform 800ms cubic-bezier(.65,0,.35,1)'
      ul.style.transform = 'translateX(' + -d + 'px)'
      timers.current.s = setTimeout(() => {
        ul.style.transition = 'none'
        ul.appendChild(first)
        ul.style.transform = 'translateX(0)'
        void ul.offsetWidth
        busy = false
      }, 820)
    }
    timers.current.t = setInterval(step, 2600)
    const ref = timers.current
    return () => {
      if (ref.t) clearInterval(ref.t)
      if (ref.s) clearTimeout(ref.s)
      win.removeEventListener('mouseenter', on)
      win.removeEventListener('mouseleave', off)
      win.removeEventListener('focusin', on)
      win.removeEventListener('focusout', off)
      win.classList.remove('run')
    }
  }, [])
  return null
}

import { Act } from '@/components/dc/dc'

type Current = 'work' | 'about' | 'cv' | undefined

const LINKS = [
  { id: 'work', label: 'WORK', href: '/work', cls: "rl [min-width:44px] [min-height:52px] md:[min-height:initial] [display:flex] [align-items:center] [justify-content:center]" },
  { id: 'about', label: 'ABOUT', href: '/about', cls: "rl [min-width:44px] [min-height:52px] md:[min-height:initial] [display:flex] [align-items:center] [justify-content:center]" },
  { id: 'cv', label: 'CV', href: '/cv', cls: "rl [min-width:44px] [min-height:44px] md:[min-height:initial] [display:flex] [align-items:center] [justify-content:center]" },
] as const

/** Vertical rail nav. The current page shows a gold pixel spark before its label. */
export function Rail({ current }: { current?: Current }) {
  return (
    <aside className="[flex:0_0_44px] md:[flex:0_0_96px] [position:sticky] [top:0] [box-sizing:border-box] [padding-top:136px] md:[padding-top:240px] [display:flex] [justify-content:center]">
      <nav className="[writing-mode:vertical-rl] [transform:rotate(180deg)] [display:flex] [align-items:center] [gap:8px] md:[gap:28px] [font-family:var(--font-mono)] [font-size:11px] md:[font-size:12px] [letter-spacing:0.1em]" aria-label="Main">
        {LINKS.map((l) =>
          l.id === current ? (
            <a key={l.id} className={l.cls} href="#top" aria-current="page">
              <svg width="8" height="8" viewBox="0 0 7 7" shapeRendering="crispEdges" fill="#D9A441" aria-hidden="true"><rect x="3" y="0" width="1" height="7" /><rect x="0" y="3" width="7" height="1" /><rect x="2" y="2" width="3" height="3" /></svg>
              {l.label}
            </a>
          ) : (
            <a key={l.id} className={l.cls} href={l.href}>
              {l.label}
            </a>
          ),
        )}
        <Act as="a" name="go" className="rl [min-width:44px] [min-height:52px] md:[min-height:initial] [display:flex] [align-items:center] [justify-content:center]" href="#contact">
          GET IN TOUCH
        </Act>
      </nav>
    </aside>
  )
}

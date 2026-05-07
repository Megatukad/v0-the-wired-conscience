import { Section } from '@/components/section'

export function WritingSection() {
  return (
    <Section id="writing" label="writing" index="03">
      <div className="max-w-3xl">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
          A writing practice built around questions I don&apos;t have clean answers to yet. Mostly about AI, accountability, and what gets lost between the model and the human on the other end.
        </p>
        
        {/* Writing entries */}
        <div className="space-y-12">
          {/* Entry 1 - Forthcoming */}
          <article className="group">
            <div className="block">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  2025
                </span>
                <h3 className="text-lg md:text-xl font-medium">
                  The Performative Caring
                </h3>
                <span className="font-mono text-xs px-2 py-1 bg-accent/20 text-accent ml-2">
                  Forthcoming
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-16">
                AI trained to perform hospitality runs into a fundamental problem: warmth requires consistency, and LLMs are probabilistic by nature. A practitioner&apos;s observation from the inside.
              </p>
              <div className="mt-3 pl-0 md:pl-16 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  AI Ethics
                </span>
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  LLM
                </span>
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  Human-AI Interaction
                </span>
              </div>
            </div>
          </article>

          {/* Entry 2 - Question placeholder (muted) */}
          <article className="group border-t border-border pt-12 opacity-70">
            <div className="block">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  —
                </span>
                <h3 className="text-lg md:text-xl font-medium text-muted-foreground">
                  Who decides what alignment means here?
                </h3>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed pl-0 md:pl-16">
                A question I keep returning to about whose values get encoded when AI governance frameworks are written far from the contexts where AI actually runs.
              </p>
              <div className="mt-3 pl-0 md:pl-16 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  AI Governance
                </span>
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  Responsible AI
                </span>
              </div>
            </div>
          </article>

          {/* Entry 3 - Question placeholder (muted) */}
          <article className="group border-t border-border pt-12 opacity-70">
            <div className="block">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  —
                </span>
                <h3 className="text-lg md:text-xl font-medium text-muted-foreground">
                  The accountability gap nobody is writing about
                </h3>
              </div>
              <p className="text-muted-foreground/80 leading-relaxed pl-0 md:pl-16">
                Not a piece yet. Just a problem I keep noticing.
              </p>
              <div className="mt-3 pl-0 md:pl-16 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  AI Accountability
                </span>
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  Emerging Markets
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}

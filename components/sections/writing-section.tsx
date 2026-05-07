import { Section } from '@/components/section'

export function WritingSection() {
  return (
    <Section id="writing" label="writing" index="03">
      <div className="max-w-3xl">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
          [Brief intro about your writing — the themes you explore, where you publish, or what you&apos;re trying to figure out in public.]
        </p>
        
        {/* Writing entries */}
        <div className="space-y-12">
          {/* Example article structure */}
          <article className="group">
            <a href="#" className="block">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  [2024]
                </span>
                <h3 className="text-lg md:text-xl font-medium group-hover:text-accent transition-colors">
                  [Article Title]
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-16">
                [Brief description or excerpt from the piece.]
              </p>
              <div className="mt-3 pl-0 md:pl-16 flex items-center gap-3">
                <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                  [Topic]
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  [Publication or Platform]
                </span>
              </div>
            </a>
          </article>

          <article className="group border-t border-border pt-12">
            <a href="#" className="block">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  [2024]
                </span>
                <h3 className="text-lg md:text-xl font-medium group-hover:text-accent transition-colors">
                  [Article Title]
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-16">
                [Brief description]
              </p>
            </a>
          </article>

          <article className="group border-t border-border pt-12">
            <a href="#" className="block">
              <div className="flex items-baseline gap-4 mb-3">
                <span className="font-mono text-xs text-muted-foreground shrink-0">
                  [2023]
                </span>
                <h3 className="text-lg md:text-xl font-medium group-hover:text-accent transition-colors">
                  [Article Title]
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-16">
                [Brief description]
              </p>
            </a>
          </article>
        </div>

        {/* Optional: Link to full archive */}
        <div className="mt-16 pt-8 border-t border-border">
          <a 
            href="#" 
            className="font-mono text-sm text-accent hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            View all writing
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </Section>
  )
}

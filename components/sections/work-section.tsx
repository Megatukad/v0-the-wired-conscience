import { Section } from '@/components/section'

export function WorkSection() {
  return (
    <Section id="work" label="work experience" index="02">
      <div className="max-w-3xl">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
          [Brief intro about your professional trajectory — from product management to AI ethics.]
        </p>
        
        {/* Work experience entries */}
        <div className="space-y-16">
          {/* Example structure for a role */}
          <article className="group">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <h3 className="text-xl md:text-2xl font-medium">
                [Role Title]
              </h3>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                [Company] · [Year–Year]
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              [Description of role, impact, and relevant work. Focus on AI-related projects, ethical considerations you navigated, or systems you built.]
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                [Tag]
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                [Tag]
              </span>
            </div>
          </article>

          {/* Placeholder for more roles */}
          <article className="group border-t border-border pt-16">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <h3 className="text-xl md:text-2xl font-medium">
                [Previous Role]
              </h3>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                [Company] · [Year–Year]
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              [Description]
            </p>
          </article>

          <article className="group border-t border-border pt-16">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <h3 className="text-xl md:text-2xl font-medium">
                [Earlier Role]
              </h3>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                [Company] · [Year–Year]
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              [Description]
            </p>
          </article>
        </div>
      </div>
    </Section>
  )
}

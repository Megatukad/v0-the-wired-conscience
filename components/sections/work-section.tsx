import { Section } from '@/components/section'

export function WorkSection() {
  return (
    <Section id="work" label="work experience" index="02">
      <div className="max-w-3xl">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16">
          What I&apos;ve built, and what building it taught me.
        </p>
        
        <div className="space-y-16">
          {/* Role 1 */}
          <article className="group">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <h3 className="text-xl md:text-2xl font-medium">
                Senior Product Manager
              </h3>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                PT Rukita Bhinneka Indonesia · June 2020 – Present
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Led product strategy for internal tools, finance systems, and third-party integrations serving 200+ users across Operations, Finance, and Service teams, reporting directly to the CTO. The most formative work here wasn&apos;t the systems I shipped but it was designing the AI response and escalation flows for customer interactions, writing the prompts directly, and watching where the model succeeded and where it silently failed. That gap between &quot;it works&quot; and &quot;it&apos;s right&quot; is where my current questions live.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                AI Workflow Design
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Prompt Engineering
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Systems Architecture
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Integration Management
              </span>
            </div>
          </article>

          {/* Role 2 */}
          <article className="group border-t border-border pt-16">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <h3 className="text-xl md:text-2xl font-medium">
                Product Manager
              </h3>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                PT Codemi Global · July 2018 – June 2020
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Owned end-to-end product for a B2B SaaS learning management system across web and mobile, working directly with the CEO across engineering, design, and customer support. First time making decisions that affected how other people learned and worked, which turned out to matter more to me than the product metrics did.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                B2B SaaS
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Product Strategy
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Stakeholder Management
              </span>
            </div>
          </article>

          {/* Role 3 */}
          <article className="group border-t border-border pt-16">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
              <h3 className="text-xl md:text-2xl font-medium">
                Quality Assurance
              </h3>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                2014 – 2018
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where it started. QA trained me to ask where things break before they do—to look for the edge cases, the hidden dependencies, the assumptions baked into a system that nobody wrote down. I didn&apos;t know it at the time, but that&apos;s also how I now think about AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Systems Thinking
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Risk Anticipation
              </span>
              <span className="font-mono text-xs px-2 py-1 bg-secondary text-muted-foreground">
                Automation
              </span>
            </div>
          </article>
        </div>
      </div>
    </Section>
  )
}

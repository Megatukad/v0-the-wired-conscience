import { Section } from '@/components/section'

export function AboutSection() {
  return (
    <Section id="about" label="about" index="01">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
          The Wired Conscience
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-16">
          I build the kind of systems I now have questions about.
        </p>
        
        <h2 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-8">
          {/* Name goes here */}
          <span className="text-muted-foreground">[Your Name]</span>
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
          <p className="text-muted-foreground">
            {/* Bio paragraph 1 */}
            [Bio content will go here. A few sentences about your background, what you&apos;re working on, and what drives your interest in AI ethics.]
          </p>
          
          <p className="text-muted-foreground">
            {/* Bio paragraph 2 */}
            [Second paragraph about your transition from PM to AI ethics research, the questions you&apos;re exploring, and your perspective on responsible AI.]
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-border">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            Current Focus
          </span>
          <p className="text-muted-foreground">
            [What you&apos;re currently researching, building, or writing about]
          </p>
        </div>
      </div>
    </Section>
  )
}

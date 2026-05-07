import { Section } from '@/components/section'

export function AboutSection() {
  return (
    <Section id="about" label="about" index="01">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
          The Wired Conscience
        </h1>
        
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90">
          <p className="text-muted-foreground">
            Hello! I&apos;m Mega. A Senior Product Manager based in Jakarta, with seven years of experience building internal systems, workflow architecture, and AI-assisted tools in production environments.
          </p>
          
          <p className="text-muted-foreground">
            I started my jouney in tech-world as a QA, where you learn to ask where things break before they do. I moved into product because I wanted to make decisions, not just observe them. Seven years later, I&apos;ve built the kind of AI systems I now have questions about: who they serve, what gets optimised, and what gets ignored. I&apos;m preparing for postgraduate study to understand how AI reshapes human authority and accountability, particularly through the lens of ethics and governance, because those questions feel urgent in contexts where AI is being deployed faster than the structures meant to guide it.
          </p>
        </div>
        
        <div className="mt-12 pt-12 border-t border-border">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
            Current Focus
          </span>
          <p className="text-muted-foreground">
            Exploring AI ethics as a research direction. Building this site. Starting to write about questions I don&apos;t have clean answers to yet.
          </p>
        </div>
      </div>
    </Section>
  )
}

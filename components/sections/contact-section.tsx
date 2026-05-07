import { Section } from '@/components/section'

export function ContactSection() {
  return (
    <Section id="contact" label="contact" index="05" className="min-h-[70vh]">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          [Brief statement about what you&apos;re open to — collaborations, speaking, research partnerships, coffee chats about AI ethics, etc.]
        </p>
        
        {/* Contact methods */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0">
              Email
            </span>
            <a 
              href="mailto:you@example.com" 
              className="text-foreground hover:text-accent transition-colors"
            >
              [your@email.com]
            </a>
          </div>
          
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0">
              LinkedIn
            </span>
            <a 
              href="#" 
              className="text-foreground hover:text-accent transition-colors"
            >
              [/in/yourprofile]
            </a>
          </div>
          
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0">
              Twitter
            </span>
            <a 
              href="#" 
              className="text-foreground hover:text-accent transition-colors"
            >
              [@yourhandle]
            </a>
          </div>
          
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider w-20 shrink-0">
              GitHub
            </span>
            <a 
              href="#" 
              className="text-foreground hover:text-accent transition-colors"
            >
              [github.com/you]
            </a>
          </div>
        </div>
        
        {/* Optional: Location or timezone */}
        <div className="mt-16 pt-8 border-t border-border">
          <span className="font-mono text-xs text-muted-foreground">
            Based in [Location] · [Timezone]
          </span>
        </div>
      </div>
    </Section>
  )
}

import { Section } from '@/components/section'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <Section id="contact" label="contact" index="05" className="min-h-[70vh]">
      <div className="max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          If you are working on responsible AI, AI governance, or thinking through similar transitions from practice to research, I am genuinely interested in the conversation.
        </p>
        
        {/* Contact methods */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
            <a 
              href="mailto:meg.setiawati@gmail.com" 
              className="text-foreground hover:text-accent transition-colors"
            >
              meg.setiawati@gmail.com
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Linkedin className="w-4 h-4 text-muted-foreground shrink-0" />
            <a 
              href="https://www.linkedin.com/in/mega-setiawati-95749ab0/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              Mega Setiawati on LinkedIn
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Github className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-muted-foreground/60">
              Work in progress.
            </span>
          </div>
        </div>
        
        {/* Location and timezone */}
        <div className="mt-16 pt-8 border-t border-border flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground">
            Jakarta, Indonesia · GMT +7
          </span>
        </div>
      </div>
    </Section>
  )
}

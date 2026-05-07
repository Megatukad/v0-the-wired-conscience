import { Navigation } from '@/components/navigation'
import { AboutSection } from '@/components/sections/about-section'
import { WorkSection } from '@/components/sections/work-section'
import { WritingSection } from '@/components/sections/writing-section'
import { ToolSection } from '@/components/sections/tool-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16 md:pt-20">
        <AboutSection />
        <WorkSection />
        <WritingSection />
        <ToolSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} · Built with intention
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              [PM → AI Ethics]
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

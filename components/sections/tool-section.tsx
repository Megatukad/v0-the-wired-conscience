import { Section } from '@/components/section'

export function ToolSection() {
  return (
    <Section id="tool" label="pm problem framer" index="04">
      <div className="max-w-3xl mb-12">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          PM Problem Framer
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          [Description of the tool — what it does, who it&apos;s for, and why you built it. This interactive tool helps frame product problems through an AI ethics lens.]
        </p>
      </div>
      
      {/* Interactive tool container */}
      <div className="bg-secondary/50 border border-border rounded-lg p-6 md:p-8">
        <div className="mb-6">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            Interactive Tool
          </span>
        </div>
        
        {/* Tool UI placeholder */}
        <div className="space-y-6">
          {/* Input area */}
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
              Problem Statement
            </label>
            <div className="w-full h-32 bg-background border border-border rounded-md flex items-center justify-center text-muted-foreground">
              [Text input will go here]
            </div>
          </div>
          
          {/* Framework selection */}
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
              Framing Lens
            </label>
            <div className="flex flex-wrap gap-2">
              <button className="font-mono text-xs px-3 py-2 bg-background border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors">
                [Stakeholder Impact]
              </button>
              <button className="font-mono text-xs px-3 py-2 bg-background border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors">
                [Fairness Audit]
              </button>
              <button className="font-mono text-xs px-3 py-2 bg-background border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors">
                [Long-term Effects]
              </button>
              <button className="font-mono text-xs px-3 py-2 bg-background border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors">
                [Governance Check]
              </button>
            </div>
          </div>
          
          {/* Action button */}
          <div className="pt-4">
            <button className="font-mono text-sm px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
              Frame Problem →
            </button>
          </div>
          
          {/* Output area */}
          <div className="pt-6 border-t border-border">
            <label className="block font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">
              Reframed Output
            </label>
            <div className="w-full min-h-48 bg-background border border-border rounded-md p-4 text-muted-foreground">
              [Output will appear here after processing]
            </div>
          </div>
        </div>
      </div>
      
      {/* Tool context */}
      <div className="mt-8 text-sm text-muted-foreground">
        <span className="font-mono text-xs text-accent">Note:</span>{' '}
        [Any disclaimers or context about how the tool works, data handling, etc.]
      </div>
    </Section>
  )
}

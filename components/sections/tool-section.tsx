'use client'

import { useState } from 'react'
import { Section } from '@/components/section'

export function ToolSection() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setIsError(false)
    setOutput('')

    try {
      const response = await fetch('/api/conscience-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ useCase: input }),
      })

      const data = await response.json()

      if (!response.ok) {
        setIsError(true)
        setOutput(data.error || 'Something went wrong. Please try again.')
      } else {
        setOutput(data.result)
      }
    } catch {
      setIsError(true)
      setOutput('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section id="tool" label="tool" index="04">
      <div className="max-w-3xl mb-12">
        <h2 className="text-2xl md:text-3xl font-medium mb-6">
          The Conscience Check
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          AI implementation decisions often happen faster than the questions that should accompany them. This tool is a prompt for slower thinking. Describe a product use case or feature involving AI, and it will surface where the risks, failure modes, and accountability gaps are likely to live.
        </p>
      </div>
      
      {/* Interactive tool container */}
      <div className="bg-secondary/30 border border-border/60 rounded-lg p-6 md:p-8">
        <div className="space-y-6">
          {/* Input area */}
          <div>
            <label className="block font-mono text-xs text-accent mb-3 tracking-wider">
              Describe your AI use case
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. We want to use AI to automatically respond to customer complaints without human review..."
              className="w-full h-32 bg-background border border-border rounded-md p-4 text-foreground placeholder:text-muted-foreground/50 placeholder:italic focus:outline-none focus:border-accent/50 transition-colors resize-none"
            />
          </div>
          
          {/* Action button */}
          <div>
            <button 
              onClick={handleSubmit}
              disabled={isLoading || !input.trim()}
              className="font-mono text-sm px-6 py-3 bg-accent text-background hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Running the check...' : 'Run the check'}
            </button>
          </div>
          
          {/* Output area */}
          <div className="pt-6 border-t border-border/60">
            <label className="block font-mono text-xs text-accent mb-3 tracking-wider">
              The Conscience Check result
            </label>
            <div className="w-full min-h-48 bg-background border border-border rounded-md p-4">
              {output ? (
                <div className={`leading-relaxed whitespace-pre-wrap ${isError ? 'text-destructive' : 'text-foreground/90'}`}>
                  {output}
                </div>
              ) : (
                <p className="text-muted-foreground/40 leading-relaxed italic">
                  This is where the analysis will appear. The tool will identify coverage gaps, escalation needs, bias surface areas, and questions your team should answer before deploying.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Tool context */}
      <p className="mt-8 max-w-2xl text-xs text-muted-foreground/60 leading-relaxed">
        <span className="font-mono text-accent tracking-wider">Note:</span>{' '}
        Built with the Google Gemini API. This tool reflects how I think about AI deployment risk, not a comprehensive compliance framework. Use it as a starting point, not a final answer.
      </p>
    </Section>
  )
}

import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  label: string
  index: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, label, index, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('min-h-screen py-24 md:py-32', className)}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-widest text-accent uppercase">
            {index} / {label}
          </span>
        </div>
        {children}
      </div>
    </section>
  )
}

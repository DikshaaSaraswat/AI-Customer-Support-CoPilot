import { FileStack, MessageSquareText, PenLine, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features: {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}[] = [
  {
    icon: FileStack,
    title: 'Queue Prediction',
    description: 'Automatically routes customer tickets to the appropriate support department.',
    gradient: 'from-[#7c3aed] to-[#a855f7]',
  },
  {
    icon: Zap,
    title: 'Priority Prediction',
    description: 'Predicts whether a ticket is Low, Medium, or High priority.',
    gradient: 'from-[#3b82f6] to-[#60a5fa]',
  },
  {
    icon: MessageSquareText,
    title: 'AI Ticket Summary',
    description: 'Generates concise ticket summaries for faster understanding.',
    gradient: 'from-[#7c3aed] to-[#3b82f6]',
  },
  {
    icon: PenLine,
    title: 'AI Draft Reply',
    description: 'Creates professional customer replies using AI assistance.',
    gradient: 'from-[#22c55e] to-[#3b82f6]',
  },
]

export function FeatureCards() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 lg:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium tracking-[0.2em] text-[#a78bfa] uppercase">
          Capabilities
        </span>
        <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
          Everything your support team needs
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Four intelligent capabilities that work together to resolve tickets faster and delight
          your customers.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Reveal
              key={feature.title}
              delay={index * 90}
              className="glass group relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-[#7c3aed]/10"
            >
              <div
                className="absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
                aria-hidden="true"
              />
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg shadow-black/20 transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon className="h-6 w-6 text-white" />
              </span>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

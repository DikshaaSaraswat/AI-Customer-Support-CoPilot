import { ArrowDown, ArrowRight, Bot, FileStack, Inbox, MessageSquareText, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Fragment } from 'react'
import { Reveal } from '@/components/reveal'

const steps: { icon: LucideIcon; title: string; gradient: string }[] = [
  { icon: Inbox, title: 'Customer Ticket', gradient: 'from-slate-500 to-slate-600' },
  { icon: FileStack, title: 'Queue Prediction', gradient: 'from-[#7c3aed] to-[#a855f7]' },
  { icon: Zap, title: 'Priority Prediction', gradient: 'from-[#3b82f6] to-[#60a5fa]' },
  { icon: MessageSquareText, title: 'Ticket Summarization', gradient: 'from-[#7c3aed] to-[#3b82f6]' },
  { icon: Bot, title: 'AI Reply Generation', gradient: 'from-[#22c55e] to-[#3b82f6]' },
]

export function WorkflowTimeline() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 lg:py-36">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium tracking-[0.2em] text-[#a78bfa] uppercase">
          How it works
        </span>
        <h2 className="mt-4 text-4xl font-semibold text-balance sm:text-5xl">
          An intelligent ticket pipeline
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Every ticket flows through an intelligent pipeline — from intake to a ready-to-send reply.
        </p>
      </Reveal>

      <Reveal className="glass-strong mt-16 rounded-3xl p-8 sm:p-12">
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Fragment key={step.title}>
                <Reveal
                  delay={index * 110}
                  className="flex flex-1 items-center gap-4 lg:flex-col lg:gap-4 lg:text-center"
                >
                  <span
                    className={`animate-pulse-glow flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} shadow-lg shadow-black/30`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                  <div>
                    <div className="text-[0.7rem] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                      Step {index + 1}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-balance">{step.title}</div>
                  </div>
                </Reveal>

                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center text-[#7c3aed]/70">
                    <ArrowDown className="h-5 w-5 lg:hidden" />
                    <ArrowRight className="hidden h-5 w-5 lg:block" />
                  </div>
                )}
              </Fragment>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}

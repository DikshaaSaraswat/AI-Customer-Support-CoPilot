'use client'

import { useRouter } from 'next/navigation'
import {
  Check,
  FileStack,
  Loader2,
  MessageSquareText,
  PenLine,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  analyzeTicket,
  loadTicket,
  saveResult,
} from '@/lib/ticket-analysis'

const steps: { icon: LucideIcon; label: string }[] = [
  { icon: FileStack, label: 'Classifying Queue' },
  { icon: Zap, label: 'Predicting Priority' },
  { icon: MessageSquareText, label: 'Generating Summary' },
  { icon: PenLine, label: 'Drafting AI Reply' },
]

const STEP_MS = 900

export function ProcessingView() {
  const router = useRouter()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const ticket = loadTicket()

    if (!ticket) {
      router.replace('/analyze')
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []

    steps.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setActive(index + 1)
        }, STEP_MS * (index + 1))
      )
    })

    const runPipeline = async () => {
      try {
        const result = await analyzeTicket(ticket)

        saveResult(result)

        router.push('/analyze/results')
      } catch (error) {
        console.error(error)
        alert(
          'Failed to analyze ticket. Please make sure the backend is running.'
        )
        router.replace('/analyze')
      }
    }

    timers.push(
      setTimeout(
        runPipeline,
        STEP_MS * steps.length + 500
      )
    )

    return () => timers.forEach(clearTimeout)
  }, [router])

  const progress = Math.min((active / steps.length) * 100, 100)

  return (
    <section className="mx-auto flex min-h-screen max-w-2xl flex-col items-center px-6 pt-40 pb-24 text-center lg:justify-center lg:pt-24">
      <span className="animate-pulse-glow flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] shadow-xl shadow-[#7c3aed]/30">
        <Sparkles className="h-7 w-7 text-white" />
      </span>

      <h1 className="mt-8 text-3xl font-semibold text-balance sm:text-4xl">
        Running the <span className="text-gradient">AI pipeline</span>
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
        The Copilot is analyzing your ticket. This only takes a moment.
      </p>

      <div className="glass-strong mt-12 w-full rounded-3xl p-6 sm:p-8">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ul className="mt-8 flex flex-col gap-3 text-left">
          {steps.map((step, index) => {
            const Icon = step.icon

            const isDone = index < active
            const isActive = index === active

            return (
              <li
                key={step.label}
                className={`flex items-center gap-4 rounded-xl border p-4 transition-all duration-500 ${
                  isActive
                    ? 'border-[#7c3aed]/40 bg-[#7c3aed]/10'
                    : isDone
                    ? 'border-[#22c55e]/25 bg-[#22c55e]/5'
                    : 'border-white/10 bg-background/30 opacity-60'
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    isDone
                      ? 'bg-[#22c55e]/20 text-[#4ade80]'
                      : isActive
                      ? 'bg-white/10 text-[#a78bfa]'
                      : 'bg-white/5 text-muted-foreground'
                  }`}
                >
                  {isDone ? (
                    <Check className="h-5 w-5" />
                  ) : isActive ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </span>

                <span className="flex-1 text-sm font-medium">
                  {step.label}
                  {isActive ? '...' : ''}
                </span>

                {isDone && (
                  <span className="text-xs font-medium text-[#4ade80]">
                    Done
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
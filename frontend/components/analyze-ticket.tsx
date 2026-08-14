'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  FileStack,
  MessageSquareText,
  PenLine,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { saveTicket } from '@/lib/ticket-analysis'

const placeholders: { icon: LucideIcon; label: string; hint: string }[] = [
  { icon: FileStack, label: 'Queue Prediction', hint: 'Routing category' },
  { icon: Zap, label: 'Priority Prediction', hint: 'Urgency level' },
  { icon: MessageSquareText, label: 'Ticket Summary', hint: 'Condensed overview' },
  { icon: PenLine, label: 'Draft Reply', hint: 'Suggested response' },
]

export function AnalyzeTicket() {
  const router = useRouter()
  const [ticket, setTicket] = useState('')
  const hasText = ticket.trim().length > 0

  function handleAnalyze() {
    if (!hasText) return
    saveTicket(ticket.trim())
    router.push('/analyze/processing')
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pt-36 pb-24 lg:pt-44">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <div className="mt-8 max-w-2xl">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-[#a78bfa]" />
          Analyze Ticket
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl">
          Let the <span className="text-gradient">Copilot</span> handle it
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Paste a customer support ticket below. The Copilot will predict its queue and priority,
          summarize it, and draft a professional reply.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        {/* Input panel */}
        <div className="glass rounded-2xl p-7">
          <label htmlFor="ticket" className="text-sm font-medium">
            Customer ticket
          </label>
          <textarea
            id="ticket"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            placeholder="e.g. I was charged twice for my subscription this month and need a refund as soon as possible..."
            rows={10}
            className="mt-3 w-full resize-none rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-[#7c3aed]/50 focus:ring-2 focus:ring-[#7c3aed]/30 focus:outline-none"
          />
          <Button
            onClick={handleAnalyze}
            disabled={!hasText}
            size="lg"
            className={`group mt-5 h-12 w-full rounded-xl text-base transition-all duration-300 ${
              hasText
                ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-lg shadow-[#7c3aed]/30 hover:scale-[1.02] hover:from-[#8b5cf6] hover:to-[#60a5fa] hover:shadow-xl hover:shadow-[#7c3aed]/40'
                : 'cursor-not-allowed bg-white/5 text-muted-foreground'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            Analyze Ticket
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <div className="mt-6 rounded-xl border border-white/10 bg-background/30 p-4">
            <div className="text-xs font-semibold tracking-wide text-foreground uppercase">
              Demo Mode
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground text-pretty">
              In production, tickets are automatically fetched from customer support platforms such
              as Zendesk, Freshdesk, or ServiceNow.
            </p>
          </div>
        </div>

        {/* Ready to Analyze dashboard */}
        <div className="glass rounded-2xl p-7">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-base font-semibold tracking-tight">Ready to Analyze</div>
              <p className="mt-1 text-sm text-muted-foreground">
                Results populate once you run the Copilot.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
              Idle
            </span>
          </div>

          <div className="mt-6 grid gap-4">
            {placeholders.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-background/30 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                    <Icon className="h-5 w-5 text-[#a78bfa]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.hint}</div>
                  </div>
                  <span className="text-2xl font-semibold text-muted-foreground/50" aria-hidden="true">
                    —
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

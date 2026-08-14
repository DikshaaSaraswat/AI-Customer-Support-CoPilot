'use client'

import { useRouter } from 'next/navigation'
import {
  Check,
  FileStack,
  MessageSquareText,
  Pencil,
  PenLine,
  RotateCcw,
  Send,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  type AnalysisResult,
  clearAnalysis,
  loadResult,
  priorityStyles,
} from '@/lib/ticket-analysis'

export function ResultsView() {
  const router = useRouter()
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [reply, setReply] = useState('')
  const [editing, setEditing] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const stored = loadResult()
    if (!stored) {
      router.replace('/analyze')
      return
    }
    setResult(stored)
    setReply(stored.reply)
  }, [router])

  function handleAnalyzeAnother() {
    clearAnalysis()
    router.push('/analyze')
  }

  if (!result) {
    return (
      <section className="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-6">
        <p className="text-muted-foreground">Loading results…</p>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl px-6 pt-36 pb-24 lg:pt-44">
      <div className="max-w-2xl">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-[#a78bfa]" />
          Analysis Complete
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-balance sm:text-5xl">
          Your <span className="text-gradient">Copilot</span> results
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          Review the AI predictions below, fine-tune the draft, and send when you&apos;re ready.
        </p>
      </div>

      <div className="mt-12 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <ResultCard icon={FileStack} label="Queue">
            <span className="text-lg font-semibold">{result.queue}</span>
          </ResultCard>
          <ResultCard icon={Zap} label="Priority">
            <span
              className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${priorityStyles[result.priority]}`}
            >
              {result.priority}
            </span>
          </ResultCard>
        </div>

        <ResultCard icon={MessageSquareText} label="Summary">
          <p className="text-sm leading-relaxed text-muted-foreground">{result.summary}</p>
        </ResultCard>

        <ResultCard icon={PenLine} label="Draft Reply">
          {editing ? (
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={10}
              className="w-full resize-none rounded-xl border border-white/10 bg-background/40 px-4 py-3 text-sm leading-relaxed text-foreground focus:border-[#7c3aed]/50 focus:ring-2 focus:ring-[#7c3aed]/30 focus:outline-none"
            />
          ) : (
            <p className="text-sm leading-relaxed whitespace-pre-line text-muted-foreground">
              {reply}
            </p>
          )}
        </ResultCard>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          onClick={() => setEditing((v) => !v)}
          variant="outline"
          size="lg"
          className="glass h-11 rounded-xl border-white/10 text-foreground transition-colors hover:bg-white/5"
        >
          {editing ? <Check className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
          {editing ? 'Done Editing' : 'Edit Reply'}
        </Button>

        <Button
          onClick={() => setSent(true)}
          disabled={sent}
          size="lg"
          className={`h-11 rounded-xl text-white transition-all duration-300 ${
            sent
              ? 'bg-[#22c55e] shadow-lg shadow-[#22c55e]/25'
              : 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] shadow-lg shadow-[#7c3aed]/30 hover:scale-[1.02] hover:from-[#8b5cf6] hover:to-[#60a5fa]'
          }`}
        >
          {sent ? (
            <>
              <Check className="h-4 w-4" /> Reply Sent
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send Reply
            </>
          )}
        </Button>

        <Button
          onClick={handleAnalyzeAnother}
          variant="ghost"
          size="lg"
          className="h-11 rounded-xl text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground sm:ml-auto"
        >
          <RotateCcw className="h-4 w-4" />
          Analyze Another Ticket
        </Button>
      </div>
    </section>
  )
}

function ResultCard({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="glass animate-fade-up rounded-2xl p-6">
      <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <Icon className="h-4 w-4 text-[#a78bfa]" />
        {label}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

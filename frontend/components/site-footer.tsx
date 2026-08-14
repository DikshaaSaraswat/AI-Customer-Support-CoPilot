import Link from 'next/link'
import { Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/github-icon'
import { Reveal } from '@/components/reveal'

export function SiteFooter() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-14">
      <Reveal className="glass-strong relative overflow-hidden rounded-[2rem] px-8 py-20 text-center sm:px-12">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: 'linear-gradient(120deg, #7c3aed33, transparent 60%, #3b82f633)' }}
          aria-hidden="true"
        />
        <div
          className="animate-pulse-glow absolute -bottom-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-balance sm:text-5xl">
            Ready to transform your support workflow?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Start analyzing tickets with AI in seconds — no setup required.
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/analyze" />}
            size="lg"
            className="shine-on-hover mt-9 h-12 rounded-xl px-7 text-base bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-xl shadow-[#7c3aed]/30 transition-transform hover:scale-[1.03]"
          >
            Get Started
          </Button>
        </div>
      </Reveal>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-10 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#3b82f6]">
            <Bot className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-medium">AI Customer Support Copilot</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Customer Support Copilot. All rights reserved.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="h-4 w-4" /> GitHub
        </a>
      </div>
    </footer>
  )
}

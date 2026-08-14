import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Rocket, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pt-44 pb-28 lg:pt-52 lg:pb-36">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="animate-fade-up glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[#a78bfa]" />
            Powered by Machine Learning &amp; LLMs
          </span>

          <h1
            className="animate-fade-up mt-7 text-[2.75rem] leading-[1.03] font-semibold text-balance sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: '0.05s' }}
          >
            AI Customer Support <span className="text-gradient">Copilot</span>
          </h1>

          <p
            className="animate-fade-up mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
            style={{ animationDelay: '0.12s' }}
          >
            An intelligent assistant that helps support teams automatically classify tickets,
            predict priority, generate concise summaries, and draft professional replies — powered
            by Machine Learning and Large Language Models.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: '0.19s' }}
          >
            <Button
              nativeButton={false}
              render={<Link href="/analyze" />}
              size="lg"
              className="shine-on-hover group h-12 rounded-xl px-6 text-base bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-xl shadow-[#7c3aed]/30 transition-transform hover:scale-[1.03] hover:from-[#8b5cf6] hover:to-[#60a5fa]"
            >
              <Rocket className="h-4 w-4" />
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href="#features" />}
              size="lg"
              variant="outline"
              className="glass h-12 rounded-xl px-6 text-base border-white/10 text-foreground transition-colors hover:bg-white/5"
            >
              Learn More
            </Button>
          </div>

          <div
            className="animate-fade-up mt-14 flex items-center gap-8"
            style={{ animationDelay: '0.26s' }}
          >
            <Stat value="4x" label="Faster triage" />
            <div className="h-9 w-px bg-white/10" />
            <Stat value="92%" label="Routing accuracy" />
            <div className="h-9 w-px bg-white/10" />
            <Stat value="24/7" label="AI availability" />
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: '0.2s' }}>
          <div
            className="animate-pulse-glow absolute -inset-8 rounded-[2.5rem] opacity-60 blur-3xl"
            style={{ background: 'linear-gradient(135deg, #7c3aed66, #3b82f666)' }}
            aria-hidden="true"
          />
          <div className="glass-strong animate-float-y relative overflow-hidden rounded-[1.75rem] p-2 shadow-2xl shadow-black/50">
            <Image
              src="/hero-ai-copilot.png"
              alt="AI robot assistant connected to a customer support dashboard with ticket cards and AI reply panel"
              width={900}
              height={720}
              priority
              className="h-auto w-full rounded-[1.4rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold tracking-tight text-foreground">{value}</div>
      <div className="mt-1 text-xs tracking-wide text-muted-foreground">{label}</div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Bot, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/github-icon'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 flex justify-center px-4 transition-all duration-300',
        scrolled ? 'pt-2' : 'pt-4',
      )}
    >
      <nav
        className={cn(
          'flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled
            ? 'glass-strong max-w-5xl shadow-xl shadow-black/30'
            : 'glass max-w-6xl shadow-lg shadow-black/20',
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] shadow-lg shadow-[#7c3aed]/30">
            <Bot className="h-5 w-5 text-white" />
          </span>
          <span className="text-sm leading-tight font-semibold text-balance">
            AI Customer Support
            <span className="block text-xs font-normal text-muted-foreground">Copilot</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<Link href="/analyze" />}
            className="rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-lg shadow-[#7c3aed]/30 transition-transform hover:scale-[1.03] hover:from-[#8b5cf6] hover:to-[#60a5fa]"
          >
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {open && (
          <div className="glass absolute top-full right-4 left-4 mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <Button
              nativeButton={false}
              render={<Link href="/analyze" />}
              className="mt-1 w-full rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white"
            >
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}

import type { Metadata } from 'next'
import { AnalyzeTicket } from '@/components/analyze-ticket'
import { BackgroundBlobs } from '@/components/background-blobs'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Analyze Ticket — AI Customer Support Copilot',
  description: 'Paste a customer ticket and let the AI Copilot classify, prioritize, summarize, and draft a reply.',
}

export default function AnalyzePage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <BackgroundBlobs />
      <SiteNav />
      <AnalyzeTicket />
    </main>
  )
}

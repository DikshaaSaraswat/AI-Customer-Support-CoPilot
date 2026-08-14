import type { Metadata } from 'next'
import { BackgroundBlobs } from '@/components/background-blobs'
import { ResultsView } from '@/components/results-view'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Results — AI Customer Support Copilot',
  description: 'Review the AI-predicted queue, priority, summary, and draft reply for your ticket.',
}

export default function ResultsPage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <BackgroundBlobs />
      <SiteNav />
      <ResultsView />
    </main>
  )
}

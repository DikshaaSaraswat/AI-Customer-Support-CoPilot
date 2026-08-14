import type { Metadata } from 'next'
import { BackgroundBlobs } from '@/components/background-blobs'
import { ProcessingView } from '@/components/processing-view'
import { SiteNav } from '@/components/site-nav'

export const metadata: Metadata = {
  title: 'Processing — AI Customer Support Copilot',
  description: 'The AI Copilot is classifying, prioritizing, summarizing, and drafting a reply.',
}

export default function ProcessingPage() {
  return (
    <main className="relative min-h-screen text-foreground">
      <BackgroundBlobs />
      <SiteNav />
      <ProcessingView />
    </main>
  )
}

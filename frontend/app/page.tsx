import { BackgroundBlobs } from '@/components/background-blobs'
import { FeatureCards } from '@/components/feature-cards'
import { HeroSection } from '@/components/hero-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { WorkflowTimeline } from '@/components/workflow-timeline'

export default function Page() {
  return (
    <main className="relative min-h-screen text-foreground">
      <BackgroundBlobs />
      <SiteNav />
      <HeroSection />
      <FeatureCards />
      <WorkflowTimeline />
      <SiteFooter />
    </main>
  )
}

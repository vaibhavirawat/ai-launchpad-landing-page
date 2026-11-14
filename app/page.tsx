import { ApplyModalProvider } from '@/components/landing/apply-modal'
import { Curriculum } from '@/components/landing/curriculum'
import { Hero } from '@/components/landing/hero'
import { LeadCapture } from '@/components/landing/lead-capture'
import { SiteHeader } from '@/components/landing/site-header'
import { ToolMarquee } from '@/components/landing/tool-marquee'
import { ValueProps } from '@/components/landing/value-props'
import { SiteFooter, WhatsAppButton } from '@/components/landing/whatsapp-button'

export default function Page() {
  return (
    <ApplyModalProvider>
      <SiteHeader />
      <main id="top">
        <Hero />
        <ToolMarquee />
        <ValueProps />
        <Curriculum />
        <LeadCapture />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </ApplyModalProvider>
  )
}

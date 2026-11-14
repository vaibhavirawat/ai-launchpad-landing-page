import { whatsappUrl } from '@/lib/landing-data'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask a question on WhatsApp (opens in new tab)"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-wa px-4 py-3 text-sm font-semibold text-ink shadow-lg shadow-wa/30 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa"
    >
      <span className="wa-icon h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Ask a Question on WhatsApp</span>
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-white/40">
      © 2026 AI Launchpad. Built for the next generation of AI-native talent.
    </footer>
  )
}

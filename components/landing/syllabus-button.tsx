'use client'

import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { weeks } from '@/lib/landing-data'

export function SyllabusButton() {
  const [toast, setToast] = useState(false)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(false), 2600)
    return () => clearTimeout(t)
  }, [toast])

  function download() {
    const text =
      'AI LAUNCHPAD — 6-WEEK SYLLABUS\n\n' +
      weeks
        .map(
          (w) =>
            `${w.week}: ${w.title}\n${w.description}\nTopics: ${w.topics.join(', ')}\nDeliverable: ${w.project}\n`,
        )
        .join('\n')
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'AI-Launchpad-Syllabus.txt'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setToast(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={download}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white/90 transition hover:bg-white/10 sm:w-auto"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Syllabus (Free)
      </button>
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink transition ${toast ? 'opacity-100' : 'opacity-0'}`}
      >
        {toast ? 'Syllabus download started' : ''}
      </div>
    </>
  )
}

'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { weeks } from '@/lib/landing-data'

const perks = ['~8 hours per week', 'Lifetime access to recordings', 'Demo Day with hiring partners']

export function Curriculum() {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]))

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <section id="curriculum" className="border-t border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-light">6-week curriculum</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            From first prompt to shipped capstone.
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            Live sessions twice a week, async labs, and a project deliverable every Friday. Designed to fit around
            classes or a full-time job.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            {perks.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-brand-light" aria-hidden="true">
                  ✓
                </span>{' '}
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="divide-y divide-line rounded-2xl border border-line bg-ink/60">
          {weeks.map((w, i) => {
            const isOpen = open.has(i)
            return (
              <div key={w.week}>
                <h3>
                  <button
                    type="button"
                    id={`acc-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`acc-${i}`}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center gap-4 p-5 text-left hover:bg-white/[0.02]"
                  >
                    <span className="shrink-0 rounded-md border border-brand/40 bg-brand/10 px-2 py-1 font-mono text-[11px] text-brand-light">
                      {w.week}
                    </span>
                    <span className="flex-1 font-medium">{w.title}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-white/40 transition ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`acc-${i}`}
                  role="region"
                  aria-labelledby={`acc-btn-${i}`}
                  className="acc-panel"
                  data-open={isOpen}
                >
                  <div>
                    <div className="px-5 pb-6 sm:pl-[6.25rem]">
                      <p className="text-sm leading-relaxed text-white/60">{w.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {w.topics.map((t) => (
                          <li key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/75">
                            {t}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-light" aria-hidden="true" />
                        {w.project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

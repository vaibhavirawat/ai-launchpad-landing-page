import { ArrowRight } from 'lucide-react'
import { ApplyButton } from './apply-modal'
import { SyllabusButton } from './syllabus-button'

const stats = [
  { label: 'Duration', value: '6 weeks' },
  { label: 'Projects shipped', value: '5 real' },
  { label: 'Coding needed', value: 'Zero' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="glow absolute inset-0" aria-hidden="true" />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-16 text-center sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1.5 text-xs font-medium text-brand-light">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-light" />
          </span>
          Cohort Starts Next Month · Limited seats
        </span>
        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Master Practical AI Workflows &amp; Land{' '}
          <span className="bg-gradient-to-r from-brand-light via-white to-brand-light bg-clip-text text-transparent">
            High-Growth Tech Roles
          </span>{' '}
          in 6 Weeks
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
          A hands-on, project-first bootcamp for students and young professionals. Ship real AI tools, automations and
          product designs every week — no coding required.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ApplyButton className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 font-medium shadow-[0_0_40px_-8px_rgba(99,102,241,0.8)] transition hover:bg-brand-deep sm:w-auto">
            Apply for Cohort
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
          </ApplyButton>
          <SyllabusButton />
        </div>
        <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white/[0.02]">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-4">
              <dt className="text-xs text-white/50">{s.label}</dt>
              <dd className="mt-1 text-lg font-semibold sm:text-2xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

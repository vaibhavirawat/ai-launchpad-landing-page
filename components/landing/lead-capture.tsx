import { RegistrationForm } from './registration-form'

export function LeadCapture() {
  return (
    <section id="apply" className="relative overflow-hidden">
      <div className="glow absolute inset-0 rotate-180" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-light">Registration open</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Reserve your seat in the next cohort.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            Takes under a minute. Our admissions team will reach out on WhatsApp within 24 hours with next steps and
            scholarship options.
          </p>
          <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
            <div className="rounded-xl border border-line bg-white/[0.03] p-4">
              <p className="text-2xl font-semibold">40</p>
              <p className="text-xs text-white/50">Seats per cohort</p>
            </div>
            <div className="rounded-xl border border-line bg-white/[0.03] p-4">
              <p className="text-2xl font-semibold">1:8</p>
              <p className="text-xs text-white/50">Mentor ratio</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl border border-line bg-panel p-6 shadow-2xl shadow-brand/10 sm:p-8">
          <RegistrationForm idPrefix="embedded" />
        </div>
      </div>
    </section>
  )
}

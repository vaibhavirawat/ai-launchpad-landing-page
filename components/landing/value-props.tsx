import { Boxes, Users, Zap, type LucideIcon } from 'lucide-react'

type Prop = { title: string; body: string; Icon: LucideIcon; featured?: boolean }

const props: Prop[] = [
  {
    title: 'Build 5 Real-World AI Projects',
    body: 'From a custom GPT assistant to a fully designed product prototype — each project mirrors a real brief and goes straight into your portfolio.',
    Icon: Boxes,
  },
  {
    title: 'Automate Workflows Without Code',
    body: 'Connect apps, APIs and AI agents with Make and n8n. Save teams hours each week — a skill that stands out in every interview.',
    Icon: Zap,
  },
  {
    title: '1-on-1 Career & Portfolio Mentorship',
    body: 'Weekly sessions with industry mentors: resume and LinkedIn rewrites, portfolio reviews, mock interviews and job referrals.',
    Icon: Users,
    featured: true,
  },
]

export function ValueProps() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-light">Why AI Launchpad</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Skills employers are hiring for — proven with a portfolio, not a certificate.
        </h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {props.map(({ title, body, Icon, featured }) => (
          <article
            key={title}
            className={
              featured
                ? 'rounded-2xl border border-brand/40 bg-gradient-to-b from-brand/15 to-transparent p-6'
                : 'rounded-2xl border border-line bg-gradient-to-b from-white/[0.05] to-transparent p-6'
            }
          >
            <div
              className={`grid h-11 w-11 place-items-center rounded-xl ${featured ? 'bg-brand text-white' : 'bg-brand/15 text-brand-light'}`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

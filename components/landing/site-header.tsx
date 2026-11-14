import { ApplyButton } from './apply-modal'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-sm font-bold" aria-hidden="true">
            AL
          </span>
          AI Launchpad
        </a>
        <nav className="hidden items-center gap-7 text-sm text-white/60 md:flex" aria-label="Primary">
          <a href="#why" className="hover:text-white">
            Why us
          </a>
          <a href="#curriculum" className="hover:text-white">
            Curriculum
          </a>
          <a href="#apply" className="hover:text-white">
            Apply
          </a>
        </nav>
        <ApplyButton className="rounded-full bg-white px-4 py-2 text-sm font-medium text-ink hover:bg-brand-light">
          Apply now
        </ApplyButton>
      </div>
    </header>
  )
}

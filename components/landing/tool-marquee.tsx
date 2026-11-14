import { tools, type Tool } from '@/lib/landing-data'

function ToolBadge({ tool, hidden }: { tool: Tool; hidden?: boolean }) {
  return (
    <li
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-3 rounded-full border border-line bg-white/[0.03] py-2 pl-2 pr-5"
    >
      <span
        className="grid h-8 w-8 place-items-center rounded-full text-xs font-bold text-ink"
        style={{ background: tool.color }}
      >
        {tool.name[0]}
      </span>
      <span className="text-sm font-medium">{tool.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">{tool.tag}</span>
    </li>
  )
}

export function ToolMarquee() {
  return (
    <section aria-labelledby="tools-title" className="border-y border-line bg-panel/60 py-8">
      <p
        id="tools-title"
        className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-white/45"
      >
        {"The tool stack you'll master"}
      </p>
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max gap-4">
          {tools.map((t) => (
            <ToolBadge key={t.name} tool={t} />
          ))}
          {tools.map((t) => (
            <ToolBadge key={`${t.name}-dup`} tool={t} hidden />
          ))}
        </ul>
      </div>
    </section>
  )
}

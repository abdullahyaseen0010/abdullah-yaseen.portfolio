import { tickerItems } from './tickerData'

// A one-line divider between Hero and Projects, not a section of its own.
// Slow, quiet, mostly muted text with the accent picked out every few items.
// prefers-reduced-motion is already handled globally (see globals.css), which
// forces every animation-duration to ~0 and iteration-count to 1 — so this
// freezes in place for anyone who has that preference set, with no extra code
// needed here.
const TechTicker = () => {
  const renderItems = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center gap-8" aria-hidden={ariaHidden || undefined}>
      {tickerItems.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-8">
          <span
            className={`font-code text-xs tracking-wide whitespace-nowrap sm:text-sm ${
              index % 3 === 0 ? 'text-accent' : 'text-tertiary-content'
            }`}
          >
            {item}
          </span>
          <span className="text-border" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="border-border bg-primary overflow-hidden border-y py-3">
      <div
        className="flex w-max gap-8"
        style={{ animation: 'tech-ticker-scroll 50s linear infinite' }}
      >
        {renderItems(false)}
        {renderItems(true)}
      </div>

      <style>{`
        @keyframes tech-ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default TechTicker

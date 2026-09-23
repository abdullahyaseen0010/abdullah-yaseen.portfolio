import Link from 'next/link'
import { hero } from './heroData'

const quietLinkClass =
  'text-tertiary-content decoration-border hover:text-neutral hover:decoration-accent underline underline-offset-4 decoration-2 transition-colors py-2'

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-neutral max-w-[14ch] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
        {hero.headline}
      </h1>

      <p className="text-tertiary-content max-w-[52ch] text-lg lg:text-xl">{hero.intro}</p>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
        <a
          href={`mailto:${hero.email}`}
          className="bg-accent text-primary rounded-md px-5 py-3 font-semibold transition-opacity hover:opacity-90"
        >
          Email me
        </a>

        <Link
          href="/projects"
          className="border-border text-neutral hover:border-accent hover:text-accent rounded-md border px-5 py-3 font-semibold transition-colors"
        >
          See my projects
        </Link>

        <a href={hero.resume} download className={quietLinkClass}>
          Download resume
        </a>

        <a href={hero.linkedin} target="_blank" rel="noopener noreferrer" className={quietLinkClass}>
          LinkedIn
        </a>
      </div>
    </div>
  )
}

export default HeroContent

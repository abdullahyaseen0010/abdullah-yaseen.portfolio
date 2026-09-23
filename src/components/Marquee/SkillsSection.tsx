import { skillGroups } from './skillsData'

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-primary border-border border-y">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-[1fr_2fr] lg:gap-12 lg:px-12 lg:py-20">
        <h2 className="text-neutral text-3xl lg:text-4xl">What I work with</h2>

        <dl className="divide-border cursor-pointer divide-y">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="hover:border-accent grid gap-1 border-l-2 border-transparent py-5 pl-4 -ml-4 transition-colors first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <dt className="font-heading text-neutral text-lg font-semibold">{group.title}</dt>
              <dd className="text-tertiary-content text-lg">{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default SkillsSection

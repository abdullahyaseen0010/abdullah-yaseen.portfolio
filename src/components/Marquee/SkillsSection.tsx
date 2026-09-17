'use client'

import Marquee from './Marquee'
import { allSkills } from './skillsData'

const SkillsSection = () => {
  return (
    <section className="bg-marquee relative py-12 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mb-8 text-center">
          <h2 className="text-primary-content mb-3 text-3xl font-bold lg:text-4xl">
            Skills & Technologies
          </h2>
          <p className="text-tertiary-content text-base lg:text-lg">
            2 years of experience building modern web applications
          </p>
        </div>

        <Marquee 
          items={allSkills} 
          speed={40} 
          pauseOnHover={true}
          direction="left"
        />

        <p className="text-tertiary-content mt-6 text-center text-sm opacity-60">
          Hover to pause
        </p>
      </div>
    </section>
  )
}

export default SkillsSection
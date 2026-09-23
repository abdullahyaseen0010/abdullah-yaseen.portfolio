import HeroContent from './HeroContent'
import HeroVisual from './HeroVisual'

const Hero = () => {
  return (
    <section id="home" className="bg-primary">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-28 pb-16 md:grid-cols-[1.5fr_1fr] md:pt-32 md:pb-24 lg:px-12">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero

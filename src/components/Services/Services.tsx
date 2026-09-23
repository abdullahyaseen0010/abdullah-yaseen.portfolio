import Link from 'next/link'
import { services, servicesCTA, servicesIntro } from './servicesData'

const Services = () => {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-24 lg:px-12 cursor-pointer lg:pt-32">
        <header className="mb-16 max-w-2xl lg:mb-20">
          <h1 className="text-neutral text-4xl sm:text-5xl lg:text-6xl">{servicesIntro.title}</h1>
          <p className="text-tertiary-content mt-6 text-lg lg:text-xl">{servicesIntro.text}</p>
        </header>

        <div className="border-border border-t">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border-border group grid gap-2 border-b py-8 transition-colors hover:border-accent md:grid-cols-[auto_1fr] md:gap-8 lg:py-10"
            >
              <span className="text-border font-heading text-xl tabular-nums lg:text-2xl">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-2">
                <h2 className="text-neutral w-fit text-2xl transition-transform duration-200 group-hover:translate-x-1 lg:text-3xl">
                  {service.title}
                </h2>
                <p className="text-tertiary-content max-w-xl text-lg">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 lg:mt-20">
          <Link
            href={servicesCTA.href}
            className="group/link text-neutral decoration-border hover:decoration-accent inline-flex w-fit items-center gap-1.5 py-1 text-lg underline decoration-2 underline-offset-4 transition-colors"
          >
            {servicesCTA.text}
            <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services

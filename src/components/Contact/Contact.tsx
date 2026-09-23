import ContactForm from './ContactForm'
import { contactConfig, contactCopy } from './contactData'

const linkClass =
  'text-neutral decoration-border hover:decoration-accent underline underline-offset-4 decoration-2 transition-colors py-1'

const Contact = () => {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-24 lg:px-12 lg:pt-32">
        <header className="mb-16 max-w-2xl lg:mb-20">
          <h1 className="text-neutral text-4xl sm:text-5xl lg:text-6xl">{contactCopy.title}</h1>
          <p className="text-tertiary-content mt-6 text-lg lg:text-xl">{contactCopy.intro}</p>
        </header>

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                <a href={`mailto:${contactConfig.email}`} className={`${linkClass} break-all`}>
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  GitHub
                </a>
              </li>
            </ul>

            <p className="text-primary-content">{contactConfig.location.full}</p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact

import Image from 'next/image'
import { projects } from './projectsData'

const linkClass =
  'group/link inline-flex items-center gap-1.5 text-neutral decoration-border hover:decoration-accent underline underline-offset-4 decoration-2 transition-colors py-1'

const Projects = () => {
  return (
    <section id="projects" className="bg-primary">
      <div className="mx-auto max-w-6xl px-4 pt-28 pb-24 lg:px-12 lg:pt-32">
        <header className="mb-16 max-w-2xl lg:mb-24">
          <h1 className="text-neutral text-4xl sm:text-5xl lg:text-6xl">Projects</h1>
          <p className="text-tertiary-content mt-6 text-lg lg:text-xl">
            A selection of work I&rsquo;ve built.
          </p>
        </header>

        <div className="border-border border-t">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="border-border grid gap-6 border-b py-12 md:grid-cols-[auto_1fr] md:gap-12 lg:py-16"
            >
              <span className="text-border font-heading text-2xl tabular-nums lg:text-3xl">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="text-neutral text-3xl lg:text-4xl">{project.title}</h2>
                  <span className="text-primary-content text-lg">{project.year}</span>
                </div>

                <p className="text-accent font-code text-sm tracking-wide lg:text-base">
                  {project.stack.join(' · ')}
                </p>

                {project.image && (
                  <div className="border-border relative aspect-[16/10] max-w-2xl overflow-hidden rounded-md border">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 768px) 60vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex max-w-2xl flex-col gap-4">
                  <p className="text-neutral text-lg lg:text-xl">{project.summary}</p>
                  <p className="text-tertiary-content">{project.detail}</p>
                </div>

                {(project.live || project.repo) && (
                  <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        View live site
                        <span className="transition-transform group-hover/link:translate-x-0.5">
                          →
                        </span>
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        Read the code
                        <span className="transition-transform group-hover/link:translate-x-0.5">
                          →
                        </span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

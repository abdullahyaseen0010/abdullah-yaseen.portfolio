import Link from 'next/link'
import { contactInfo, footerLinks, socialLinks } from './footerData'

const linkClass =
  'text-tertiary-content hover:text-neutral inline-block py-1 text-sm transition-colors hover:underline underline-offset-4'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-2 md:max-w-xs">
            <p className="font-heading text-neutral text-base font-semibold">
              {contactInfo.name}
            </p>
            <p className="text-tertiary-content text-sm leading-relaxed">
              {contactInfo.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer">
            <ul className="flex flex-col">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <ul className="flex flex-col">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={linkClass}
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-border border-t">
        <p className="text-primary-content mx-auto max-w-6xl px-4 py-6 text-center text-xs lg:px-12">
          © {year} {contactInfo.name}
        </p>
      </div>
    </footer>
  )
}

export default Footer

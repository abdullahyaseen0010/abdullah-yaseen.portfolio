import FooterBrand from './FooterBrand'
import FooterLinks from './FooterLinks'
import FooterSocials from './FooterSocials'
import FooterContact from './FooterContact'
import FooterCopyright from './FooterCopyright'
import FooterBackground from './FooterBackground'

const Footer = () => {
  return (
    <footer 
      className="relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14"
      style={{ backgroundColor: 'var(--color-secondary)' }}
    >
      <FooterBackground />

      {/* Top section */}
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <FooterBrand />
        <FooterLinks />
      </div>

      {/* Bottom section */}
      <div className="relative z-20 flex flex-col-reverse gap-20 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <FooterSocials />
          <FooterCopyright />
        </div>
        <FooterContact />
      </div>
    </footer>
  )
}

export default Footer

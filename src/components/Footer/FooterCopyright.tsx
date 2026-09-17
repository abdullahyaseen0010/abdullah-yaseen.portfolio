const FooterCopyright = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <p 
      className="flex flex-col self-end text-right text-xs md:text-center"
      style={{ color: 'var(--color-tertiary-content)' }}
    >
      <span>© {currentYear} — Copyright</span>
      <span>All Rights reserved</span>
    </p>
  )
}

export default FooterCopyright
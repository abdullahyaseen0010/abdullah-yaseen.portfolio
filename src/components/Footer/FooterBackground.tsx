const FooterBackground = () => {
  return (
    <div 
      className="absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:h-[1030px] md:w-[1030px] md:-translate-y-0 md:p-20 opacity-5"
      style={{ backgroundColor: 'var(--color-neutral)' }}
    >
      <div 
        className="h-full w-full rounded-full p-14 md:p-20 opacity-40"
        style={{ backgroundColor: 'var(--color-neutral)' }}
      >
        <div 
          className="h-full w-full rounded-full opacity-50"
          style={{ backgroundColor: 'var(--color-neutral)' }}
        />
      </div>
    </div>
  )
}

export default FooterBackground
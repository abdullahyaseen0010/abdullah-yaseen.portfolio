import type { SVGProps } from 'react'

// The same eight-pointed star used in the hero, as a small mark.
// It uses currentColor, so it follows the theme with no JavaScript.
const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M6.81 6.81H25.19V25.19H6.81Z" />
      <path d="M16 3L29 16L16 29L3 16Z" />
    </svg>
  )
}

export default Logo

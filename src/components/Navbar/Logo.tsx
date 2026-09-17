'use client'

import { useEffect, useState } from 'react'

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Get initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark'
    setTheme(currentTheme)

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'dark'
          setTheme(newTheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  // Theme-specific logo configurations
  const logos = {
    light: {
      paths: [
        { d: "M20 5L30 15L20 25L10 15L20 5Z", fill: "#4f46e5" },
        { d: "M20 10L25 15L20 20L15 15L20 10Z", fill: "#8b5cf6" },
        { d: "M18 15H22V25H18V15Z", fill: "#06b6d4" },
      ],
    },
    dark: {
      paths: [
        { d: "M15 8L25 8L30 15L25 22L15 22L10 15L15 8Z", fill: "#22d3ee" },
        { d: "M18 12L22 12L24 15L22 18L18 18L16 15L18 12Z", fill: "#818cf8" },
        { d: "M20 5L20 25", stroke: "#a78bfa", strokeWidth: "2" },
      ],
    },
    ocean: {
      paths: [
        { d: "M20 3C15 3 10 8 10 15C10 22 15 27 20 27C25 27 30 22 30 15C30 8 25 3 20 3Z", fill: "#00d9ff", fillOpacity: "0.3" },
        { d: "M15 15C15 12 17 10 20 10C23 10 25 12 25 15C25 18 23 20 20 20C17 20 15 18 15 15Z", fill: "#00bcd4" },
        { d: "M12 15Q20 8 28 15Q20 22 12 15", fill: "#4dd0e1", fillOpacity: "0.5" },
      ],
    },
    sunset: {
      paths: [
        { d: "M20 5L28 15L20 25L12 15L20 5Z", fill: "#ff6f61" },
        { d: "M20 10L24 15L20 20L16 15L20 10Z", fill: "#ff8a80" },
        { d: "M20 15C20 15 15 18 15 22C15 24 17 25 20 25C23 25 25 24 25 22C25 18 20 15 20 15Z", fill: "#ffd54f" },
      ],
    },
    forest: {
      paths: [
        { d: "M20 5L25 12L22 12L27 19L23 19L28 26H12L17 19H13L18 12H15L20 5Z", fill: "#66bb6a" },
        { d: "M18 26H22V29H18V26Z", fill: "#81c784" },
        { d: "M15 22L20 15L25 22H15Z", fill: "#4caf50", fillOpacity: "0.5" },
      ],
    },
    cyberpunk: {
      paths: [
        { d: "M10 10L20 5L30 10L30 20L20 25L10 20L10 10Z", fill: "none", stroke: "#00ff9f", strokeWidth: "2" },
        { d: "M15 15L20 12L25 15L25 18L20 21L15 18L15 15Z", fill: "#b388ff" },
        { d: "M20 5V25M10 10L30 20M30 10L10 20", stroke: "#b388ff", strokeWidth: "1", strokeOpacity: "0.5" },
      ],
    },
  }

  const currentLogo = logos[theme as keyof typeof logos] || logos.dark

  return (
    <svg
      width="40"
      height="32"
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="transition-all duration-500"
    >
      {currentLogo.paths.map((pathData, index) => (
        <path
          key={index}
          {...pathData}
          className="transition-all duration-500"
        />
      ))}
    </svg>
  )
}

export default Logo
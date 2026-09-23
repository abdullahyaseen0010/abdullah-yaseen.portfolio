import type { Project } from './project'

// Only list projects you actually built. One or two real ones with a live link
// and a screenshot are worth more than six generic ones.
export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'This portfolio',
    year: 2026,
    summary:
      'My personal site: an intro, the tools I use, and the projects I have built. Light and dark themes, and it works on phones.',
    detail:
      'Built with the Next.js App Router. Most sections render on the server, so only the small tile animation in the hero ships client JavaScript. Colors and fonts are defined once as tokens in the Tailwind v4 theme, which is how the light and dark themes share the same components.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://abdullah-yaseen-portfolio.vercel.app',
    repo: 'https://github.com/abdullahyaseen0010/abdullah-yaseen.portfolio',
    // image: { src: '/projects/portfolio.png', alt: 'Screenshot of the portfolio home page' },
  },

  // Copy this template for each real project, then delete this comment.
  // Only add a project once it is real: built, and either live or on GitHub.
  // {
  //   slug: 'your-project',
  //   title: 'Project name',
  //   year: 2025,
  //   summary: 'What it does and who it is for.',
  //   detail: 'One real problem you solved, or one decision you made and why.',
  //   stack: ['React', 'Node.js'],
  //   live: 'https://...',
  //   repo: 'https://github.com/abdullahyaseen0010/your-repo',
  //   image: { src: '/projects/your-project.png', alt: 'What the screenshot shows' },
  // },
]

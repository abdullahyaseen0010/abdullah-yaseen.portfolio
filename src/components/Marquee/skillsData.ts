// Edit this list to match what you can actually work with.
// Order matters: put what you use most first in each group.
export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML and CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs'],
  },
  {
    title: 'Tools',
    items: ['Git', 'npm', 'Figma'],
  },
]

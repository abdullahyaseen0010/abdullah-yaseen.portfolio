import { 
  Code2, 
  Palette, 
  Zap, 
  Database,
  Globe,
  Boxes,
  LucideIcon
} from 'lucide-react'

export interface Skill {
  name: string
  icon: LucideIcon
  category: 'frontend' | 'backend' | 'tools'
}

export const frontendSkills: Skill[] = [
  { name: 'React.js', icon: Code2, category: 'frontend' },
  { name: 'Next.js', icon: Zap, category: 'frontend' },
  { name: 'TypeScript', icon: Code2, category: 'frontend' },
  { name: 'JavaScript (ES6+)', icon: Code2, category: 'frontend' },
  { name: 'TailwindCSS', icon: Palette, category: 'frontend' },
  { name: 'HTML5', icon: Globe, category: 'frontend' },
  { name: 'CSS3', icon: Palette, category: 'frontend' },
  { name: 'Responsive Design', icon: Globe, category: 'frontend' },
]

export const backendSkills: Skill[] = [
  { name: 'Node.js', icon: Database, category: 'backend' },
  { name: 'REST APIs', icon: Boxes, category: 'backend' },
]

export const toolsSkills: Skill[] = [
  { name: 'Git', icon: Code2, category: 'tools' },
  { name: 'npm', icon: Boxes, category: 'tools' },
  { name: 'Figma', icon: Palette, category: 'tools' },
]

export const allSkills: Skill[] = [
  ...frontendSkills,
  ...backendSkills,
  ...toolsSkills,
]
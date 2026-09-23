// types/project.ts
export interface Project {
  /** Unique, url-safe id, e.g. "my-project" */
  slug: string
  title: string
  year: number
  /** What it is and who it is for. One or two sentences. */
  summary: string
  /** One real problem you hit or decision you made. This is what makes a project believable. */
  detail: string
  stack: string[]
  live?: string
  repo?: string
  /** Screenshot in /public, e.g. { src: '/projects/my-project.png', alt: 'Dashboard showing ...' } */
  image?: { src: string; alt: string }
}

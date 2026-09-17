// types/project.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}
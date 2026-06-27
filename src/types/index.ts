export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  github: string
}

export interface Skill {
  name: string
  level: 'avançado' | 'intermediário' | 'básico'
}

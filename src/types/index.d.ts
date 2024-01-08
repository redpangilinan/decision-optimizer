export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    github: string
  }
  ogImage: string
}

export type Decision = {
  id: string
  decision: string
  factors: Array<Factor>
}

export type Factor = {
  id: string
  factor: string
  score: number
  weight: number
  type: "positive" | "negative"
}

export type LocalStorageContextType = {
  readLocalStorage: (key: string) => string | null
  setLocalStorage: (key: string, value: string) => void
}

export type ButtonVariants =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"

export type ButtonSizes = "default" | "icon" | "sm" | "lg"

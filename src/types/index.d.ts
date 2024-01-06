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
  description: string
  factors: Array<string>
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

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
  value: number
  importance: Importance
  type: FactorType
}

export type LocalStorageContextType = {
  readLocalStorage: (key: string) => string | null
  setLocalStorage: (key: string, value: string) => void
}

// Enum
export type ButtonVariants =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"

export type ButtonSizes = "default" | "icon" | "sm" | "lg"

export type Importance =
  | "Very Important"
  | "Important"
  | "Neutral"
  | "Unimportant"
  | "Very Unimportant"

export type FactorType = "Positive" | "Negative"

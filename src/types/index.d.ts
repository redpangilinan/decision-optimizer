import { FactorType, Importance } from "@/types/enum"

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

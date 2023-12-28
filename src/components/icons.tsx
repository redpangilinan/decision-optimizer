import { Command, Menu, Moon, Plus, SunMedium, Trash2 } from "lucide-react"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

const icons = {
  logo: Command,
  sun: SunMedium,
  moon: Moon,
  menu: Menu,
  add: Plus,
  delete: Trash2,
}

export const Icons: IconsType = icons

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

type Case = {
  case: string
  value: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId() {
  const timestamp = new Date().getTime()
  const random = Math.random().toString(36).substring(2)
  const id = `${timestamp}-${random}`

  return id
}

export function getMultiplier(choice: string, cases: Case[]): number {
  for (const item of cases) {
    if (item.case === choice) {
      return item.value
    }
  }
  return 0
}

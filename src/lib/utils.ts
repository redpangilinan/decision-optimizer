import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId() {
  const timestamp = new Date().getTime()
  const random = Math.random().toString(36).substring(2)
  const id = `${timestamp}-${random}`

  return id
}

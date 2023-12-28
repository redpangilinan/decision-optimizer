"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import { Toaster } from "sonner"

export function ToastWrapper() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <Toaster position={isDesktop ? "bottom-right" : "top-center"} closeButton />
  )
}

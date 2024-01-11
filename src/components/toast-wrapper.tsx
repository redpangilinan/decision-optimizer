"use client"

import { Toaster } from "sonner"

import { useMediaQuery } from "@/hooks/use-media-query"

export function ToastWrapper() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <Toaster position={isDesktop ? "bottom-right" : "top-center"} closeButton />
  )
}

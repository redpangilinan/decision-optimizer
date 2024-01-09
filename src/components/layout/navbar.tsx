"use client"

import Link from "next/link"
import { useMediaQuery } from "@/hooks/use-media-query"

import { siteConfig } from "@/config/site"
import { DecisionAddButton } from "@/components/decision/decision-add-button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="flex justify-between pt-4">
      <Link href="/" className="flex items-center gap-2">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex gap-2">
        <ModeToggle />
        {isDesktop ? (
          <DecisionAddButton variant="outline" />
        ) : (
          <DecisionAddButton variant="outline" size="icon" />
        )}
      </nav>
    </div>
  )
}

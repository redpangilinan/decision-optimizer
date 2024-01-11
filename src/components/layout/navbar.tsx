import Link from "next/link"

import { siteConfig } from "@/config/site"
import { DecisionClearButton } from "@/components/decision/decision-clear-button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import { ResultsButton } from "@/components/results/results-button"

export function Navbar() {
  return (
    <div className="flex justify-between pt-4">
      <Link href="/" className="flex items-center gap-2">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex gap-2">
        <DecisionClearButton variant="outline" />
        <ResultsButton variant="outline" />
        <ModeToggle />
      </nav>
    </div>
  )
}

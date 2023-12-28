import Link from "next/link"

import { siteConfig } from "@/config/site"
import { DecisionAddButton } from "@/components/decision/decision-add-button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"

export function Navbar() {
  return (
    <div className="flex justify-between py-4">
      <Link href="/" className="flex items-center gap-2">
        <Icons.logo />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <nav className="hidden sm:flex sm:flex-wrap sm:gap-2">
        <ModeToggle />
        <DecisionAddButton variant="outline" />
      </nav>
    </div>
  )
}

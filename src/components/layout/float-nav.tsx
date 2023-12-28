"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DecisionAddButton } from "@/components/decision/decision-add-button"
import { Icons } from "@/components/icons"

export function FloatNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="fixed bottom-4 right-4" asChild>
        <Button size="icon">
          <Icons.add />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DecisionAddButton variant="ghost" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

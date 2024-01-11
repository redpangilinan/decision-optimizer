import { ButtonSizes, ButtonVariants } from "@/types/enum"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/components/icons"

import { ResultsContent } from "./results-content"

interface DecisionDeleteButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
}

export function ResultsButton({ variant, size }: DecisionDeleteButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={variant} size={size}>
          <Icons.info className="mr-2 h-4 w-4" />
          <span>Results</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Results</SheetTitle>
          <ResultsContent />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

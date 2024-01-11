"use client"

import { ButtonSizes, ButtonVariants } from "@/types"
import { toast } from "sonner"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"
import { Icons } from "@/components/icons"

interface DecisionClearButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
}

export function DecisionClearButton({
  variant,
  size,
}: DecisionClearButtonProps) {
  const clearDecisions = useDecisionStore((state) => state.clearDecisions)

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant={variant} size={size}>
          <Icons.delete className="mr-2 h-4 w-4" />
          <span>Clear</span>
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Do you want to clear all decisions?</CredenzaTitle>
          <CredenzaDescription>
            This action cannot be undone!
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button
              onClick={() => {
                clearDecisions()
                toast.success("All decisions cleared successfully!")
              }}
            >
              Clear
            </Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

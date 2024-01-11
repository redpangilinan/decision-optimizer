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

interface DecisionDeleteButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
  decisionId: string
  factorId: string
}

export function FactorDeleteButton({
  variant,
  size,
  decisionId,
  factorId,
}: DecisionDeleteButtonProps) {
  const deleteFactor = useDecisionStore((state) => state.deleteFactor)

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant={variant} size={size}>
          <Icons.delete className="h-4 w-4" />
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Do you to delete this factor?</CredenzaTitle>
          <CredenzaDescription>
            This action cannot be undone!
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button
              onClick={() => {
                deleteFactor(decisionId, factorId)
                toast.success("Factor deleted successfully!")
              }}
            >
              Delete
            </Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

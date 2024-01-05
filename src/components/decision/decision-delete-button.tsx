"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonVariants } from "@/types"
import { toast } from "sonner"

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
  id: string
}

export function DecisionDeleteButton({
  variant,
  id,
}: DecisionDeleteButtonProps) {
  const deleteDecision = useDecisionStore((state) => state.deleteDecision)

  const deleteDecisionFn = (id: string) => {
    deleteDecision(id)
    toast.success("Decision deleted successfully!")
  }

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant={variant}>
          <Icons.delete className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Do you to delete this decision?</CredenzaTitle>
          <CredenzaDescription>
            This action cannot be undone!
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button onClick={() => deleteDecisionFn(id)}>Delete</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

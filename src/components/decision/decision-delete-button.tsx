"use client"

import { toast } from "sonner"

import { ButtonSizes, ButtonVariants } from "@/types/enum"
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
  id: string
}

export function DecisionDeleteButton({
  variant,
  size,
  id,
}: DecisionDeleteButtonProps) {
  const deleteDecision = useDecisionStore((state) => state.deleteDecision)

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant={variant} size={size}>
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
            <Button
              onClick={() => {
                deleteDecision(id)
                toast.success("Decision deleted successfully!")
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

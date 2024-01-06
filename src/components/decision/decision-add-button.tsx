"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonSizes, ButtonVariants } from "@/types"
import { toast } from "sonner"

import { generateId } from "@/lib/utils"
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

interface DecisionAddButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
}

export function DecisionAddButton({ variant, size }: DecisionAddButtonProps) {
  const addDecision = useDecisionStore((state) => state.addDecision)

  const createDecision = () => {
    const data = {
      id: generateId(),
      decision: "New Decision",
      factors: [],
    }

    addDecision(data)
    toast.success("Decision created successfully!")
  }

  return (
    <Credenza>
      <CredenzaTrigger asChild>
        <Button variant={variant} size={size}>
          <Icons.add className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline-block">Add Decision</span>
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Do you want to create a new decision?</CredenzaTitle>
          <CredenzaDescription>This will add a new card.</CredenzaDescription>
        </CredenzaHeader>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <Button onClick={() => createDecision()}>Create</Button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  )
}

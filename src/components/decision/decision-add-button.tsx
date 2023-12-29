"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonVariants } from "@/types"
import { toast } from "sonner"

import { generateId } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  ResponsiveModal,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/components/responsive-modal"

interface DecisionAddButtonProps {
  variant?: ButtonVariants
}

export function DecisionAddButton({ variant }: DecisionAddButtonProps) {
  const addDecision = useDecisionStore((state) => state.addDecision)

  const createDecision = () => {
    const data = {
      id: generateId(),
      decision: "Test",
      description: "Test",
      factors: ["Test"],
    }

    addDecision(data)
    toast.success("Decision created successfully!")
  }

  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <Button variant={variant}>
          <Icons.add className="mr-2 h-4 w-4" />
          <span>Add Decision</span>
        </Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>
            Do you want to create a new decision?
          </ResponsiveModalTitle>
          <ResponsiveModalDescription>
            This will add a new card.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <ResponsiveModalFooter>
          <ResponsiveModalClose asChild>
            <Button onClick={() => createDecision()}>Create</Button>
          </ResponsiveModalClose>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  )
}

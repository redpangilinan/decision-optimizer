"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonVariants } from "@/types"
import { toast } from "sonner"

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
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <Button variant={variant}>
          <Icons.delete className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>
            Do you to delete this decision?
          </ResponsiveModalTitle>
          <ResponsiveModalDescription>
            This action cannot be undone!
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <ResponsiveModalFooter>
          <ResponsiveModalClose asChild>
            <Button onClick={() => deleteDecisionFn(id)}>Delete</Button>
          </ResponsiveModalClose>
        </ResponsiveModalFooter>
      </ResponsiveModalContent>
    </ResponsiveModal>
  )
}

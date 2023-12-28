"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonVariants } from "@/types"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={variant}>
          <Icons.delete className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Do you to delete this decision?</DrawerTitle>
          <DrawerDescription>This action cannot be undone!</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button onClick={() => deleteDecisionFn(id)}>Delete</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

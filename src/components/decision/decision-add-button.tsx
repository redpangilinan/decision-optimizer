"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonVariants } from "@/types"
import { toast } from "sonner"

import { generateId } from "@/lib/utils"
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
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={variant}>
          <Icons.add className="mr-2 h-4 w-4" />
          <span>Add Decision</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Do you want to create a new decision?</DrawerTitle>
          <DrawerDescription>This will add a new card.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button onClick={() => createDecision()}>Create</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

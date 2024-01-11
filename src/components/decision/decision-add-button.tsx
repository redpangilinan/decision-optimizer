"use client"

import * as React from "react"
import { ButtonSizes, ButtonVariants } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { generateId } from "@/lib/utils"
import { decisionSchema } from "@/lib/validations/decision"
import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { Button } from "@/components/ui/button"
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface DecisionAddButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
}

type FormData = z.infer<typeof decisionSchema>

export function DecisionAddButton({ variant, size }: DecisionAddButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const addDecision = useDecisionStore((state) => state.addDecision)
  const form = useForm<FormData>({
    resolver: zodResolver(decisionSchema),
    defaultValues: {
      decision: "",
    },
  })

  function onSubmit(values: FormData) {
    const data = {
      id: generateId(),
      decision: values.decision,
      factors: [],
    }

    addDecision(data)
    toast.success("Decision created successfully!")

    form.reset()
    setIsOpen(false)
  }

  return (
    <Credenza open={isOpen} onOpenChange={setIsOpen}>
      <CredenzaTrigger asChild>
        <Button variant={variant} size={size}>
          <Icons.add className="mr-2 h-4 w-4" />
          <span>Add Decision</span>
        </Button>
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Do you want to create a new decision?</CredenzaTitle>
          <CredenzaDescription>This will add a new card.</CredenzaDescription>
        </CredenzaHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <CredenzaBody>
              <FormField
                control={form.control}
                name="decision"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input a decision</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g Take a rest"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CredenzaBody>
            <CredenzaFooter>
              <Button type="submit">Create</Button>
            </CredenzaFooter>
          </form>
        </Form>
      </CredenzaContent>
    </Credenza>
  )
}

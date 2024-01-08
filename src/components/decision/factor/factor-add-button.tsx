"use client"

import * as React from "react"
import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { ButtonSizes, ButtonVariants } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { generateId } from "@/lib/utils"
import { factorSchema } from "@/lib/validations/factor"
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

interface FactorAddButtonProps {
  decisionId: string
  variant?: ButtonVariants
  size?: ButtonSizes
}

type FormData = z.infer<typeof factorSchema>

export function FactorAddButton({
  decisionId,
  variant,
  size,
}: FactorAddButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const addFactor = useDecisionStore((state) => state.addFactor)
  const form = useForm<FormData>({
    resolver: zodResolver(factorSchema),
    defaultValues: {
      factor: "",
    },
  })

  function onSubmit(values: FormData) {
    const data = {
      id: generateId(),
      factor: values.factor,
      score: Number(values.score),
      weight: Number(values.weight),
      type: values.type as "positive" | "negative",
    }

    console.log(data)

    addFactor(decisionId, data)
    toast.success("Factor created successfully!")

    form.reset()
    setIsOpen(false)
  }

  return (
    <Credenza open={isOpen} onOpenChange={setIsOpen}>
      <CredenzaTrigger asChild>
        <Button variant={variant} size={size}>
          <Icons.add className="mr-2 h-4 w-4" />
          <span>Add Factor</span>
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
                name="factor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input a factor</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g Enjoyment"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="score"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input score</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g 10"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input weight</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g 0.8"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Input type</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="positive or negative"
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

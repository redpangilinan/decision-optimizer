"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import {
  ButtonSizes,
  ButtonVariants,
  FactorType,
  Importance,
} from "@/types/enum"
import { generateId } from "@/lib/utils"
import { factorSchema } from "@/lib/validations/factor"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Icons } from "@/components/icons"

interface FactorAddButtonProps {
  variant?: ButtonVariants
  size?: ButtonSizes
  decisionId: string
}

type FormData = z.infer<typeof factorSchema>

export function FactorAddButton({
  variant,
  size,
  decisionId,
}: FactorAddButtonProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const addFactor = useDecisionStore((state) => state.addFactor)
  const form = useForm<FormData>({
    resolver: zodResolver(factorSchema),
    defaultValues: {
      factor: "",
      value: [75],
      importance: "Important",
      type: "Positive",
    },
  })

  function onSubmit(data: FormData) {
    const factor = {
      id: generateId(),
      factor: data.factor,
      value: data.value[0],
      importance: data.importance as Importance,
      type: data.type as FactorType,
    }

    addFactor(decisionId, factor)
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
          <CredenzaTitle>Do you want to create a new factor?</CredenzaTitle>
          <CredenzaDescription>
            This will add a new factor for the decision.
          </CredenzaDescription>
        </CredenzaHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <CredenzaBody className="space-y-4">
              <FormField
                control={form.control}
                name="factor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Factor Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g Enjoyment"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="importance"
                  render={({ field: { value, onChange } }) => (
                    <FormItem className="space-x-2">
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="w-full" variant="outline">
                              {value}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>
                              Factor Importance
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup onValueChange={onChange}>
                              <DropdownMenuRadioItem value="Very Important">
                                Very Important
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Important">
                                Important
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Neutral">
                                Neutral
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Unimportant">
                                Unimportant
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Very Unimportant">
                                Very Unimportant
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field: { value, onChange } }) => (
                    <FormItem className="space-x-2">
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="w-full" variant="outline">
                              {value}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Factor Type</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup onValueChange={onChange}>
                              <DropdownMenuRadioItem value="Positive">
                                Positive
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Negative">
                                Negative
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="value"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Value - {value}</FormLabel>
                    <FormControl>
                      <Slider
                        defaultValue={value}
                        min={50}
                        max={100}
                        step={1}
                        onValueChange={onChange}
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

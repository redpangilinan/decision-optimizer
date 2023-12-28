"use client"

import { Decision } from "@/types"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DecisionDeleteButton } from "./decision-delete-button"

interface DecisionCardProps {
  data: Decision
}

export function DecisionCard({ data }: DecisionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.decision}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {data.factors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DecisionDeleteButton id={data.id} />
      </CardFooter>
    </Card>
  )
}

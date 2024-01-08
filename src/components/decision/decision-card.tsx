"use client"

import { Decision } from "@/types"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DecisionDeleteButton } from "./decision-delete-button"
import { FactorAddButton } from "./factor/factor-add-button"

interface DecisionCardProps {
  data: Decision
}

export function DecisionCard({ data }: DecisionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{data.decision}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {data.factors.map((factor) => (
            <li key={factor.id}>
              {factor.factor} - {factor.score} - {factor.weight} - {factor.type}
            </li>
          ))}
        </ul>
        <FactorAddButton variant="ghost" decisionId={data.id} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <DecisionDeleteButton id={data.id} />
      </CardFooter>
    </Card>
  )
}

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
import { FactorDeleteButton } from "./factor/factor-delete-button"

interface DecisionCardProps {
  data: Decision
}

export function DecisionCard({ data }: DecisionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{data.decision}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {data.factors.map((factor) => (
          <Card className="flex justify-between p-4" key={factor.id}>
            <div className="flex items-center">
              {factor.factor} - {factor.value} - {factor.importance} -{" "}
              {factor.type}
            </div>
            <FactorDeleteButton
              variant="ghost"
              size="icon"
              decisionId={data.id}
              factorId={factor.id}
              key={factor.id}
            ></FactorDeleteButton>
          </Card>
        ))}
        <FactorAddButton variant="ghost" decisionId={data.id} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <DecisionDeleteButton id={data.id} />
      </CardFooter>
    </Card>
  )
}

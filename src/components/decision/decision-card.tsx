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
    <Card className="flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle className="text-xl">{data.decision}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          {data.factors.length === 0 ? (
            <div>No factors available.</div>
          ) : (
            data.factors.map((factor) => (
              <div className="flex justify-between" key={factor.id}>
                <div
                  className={`flex items-center ${
                    factor.type === "Positive"
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {factor.factor} ({factor.importance})
                </div>
                <FactorDeleteButton
                  variant="ghost"
                  size="icon"
                  decisionId={data.id}
                  factorId={factor.id}
                  key={factor.id}
                ></FactorDeleteButton>
              </div>
            ))
          )}
        </CardContent>
      </div>
      <CardFooter className="grid grid-cols-2 gap-2">
        <FactorAddButton decisionId={data.id} />
        <DecisionDeleteButton variant="destructive" id={data.id} />
      </CardFooter>
    </Card>
  )
}

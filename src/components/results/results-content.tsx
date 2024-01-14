"use client"

import { Decision, Factor } from "@/types"

import { cn, getMultiplier } from "@/lib/utils"
import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { Card } from "@/components/ui/card"

export function ResultsContent() {
  const decisionStore = useDecisionStore()
  const decisions = decisionStore.decisions

  const getImportanceValue = (factor: Factor) => {
    const importanceValue = getMultiplier(factor.importance, [
      { case: "Very Unimportant", value: 1 },
      { case: "Unimportant", value: 2 },
      { case: "Neutral", value: 3 },
      { case: "Important", value: 4 },
      { case: "Very Important", value: 5 },
    ])

    return importanceValue
  }

  const getNormalizedFactorValue = (factor: Factor) => {
    const normalizedFactorValue = (getImportanceValue(factor) - 1) / (5 - 1)
    if (normalizedFactorValue === undefined || isNaN(normalizedFactorValue)) {
      return 1
    }

    return normalizedFactorValue
  }

  const sumFactors = (factors: Factor[]) => {
    if (factors.length === 0) {
      return 0
    }

    return factors.reduce((sum, factor) => {
      return sum + getNormalizedFactorValue(factor)
    }, 0)
  }

  const getDecisionValue = (factors: Factor[]) => {
    const positiveFactors = factors.filter(
      (factor) => factor.type === "Positive"
    )
    const negativeFactors = factors.filter(
      (factor) => factor.type === "Negative"
    )

    const positiveSum = sumFactors(positiveFactors)
    const negativeSum = sumFactors(negativeFactors)

    const decisionValue =
      factors.length > 1
        ? ((positiveSum - negativeSum) / factors.length) * 50 + 50
        : 0

    return Number.isInteger(decisionValue)
      ? decisionValue.toFixed(0)
      : decisionValue.toFixed(2)
  }

  function getDecisionMessage(decisions: Decision[]) {
    const decisionValues = decisions.map((decision) =>
      parseFloat(getDecisionValue(decision.factors))
    )

    const maxDecisionValue = Math.max(...decisionValues)

    if (
      decisionValues[0] === decisionValues[1] &&
      decisionValues[0] === decisionValues[2]
    ) {
      return "You can't go wrong with any of the top decisions."
    } else if (decisionValues[0] === decisionValues[1]) {
      return `Both ${decisions[0]?.decision} and ${decisions[1]?.decision} are the best decisions. You can pick either one.`
    } else if (decisionValues[0] === maxDecisionValue) {
      return `${decisions[0]?.decision} is the most optimal decision.`
    } else {
      return "No optimal decision found."
    }
  }

  decisions.sort((a: Decision, b: Decision) => {
    const valueA = parseFloat(getDecisionValue(a.factors))
    const valueB = parseFloat(getDecisionValue(b.factors))
    return valueB - valueA
  })

  return (
    <div className="space-y-2">
      {decisions.length === 0 ? (
        <div>No results yet.</div>
      ) : (
        <p className="pb-2">{getDecisionMessage(decisions)}</p>
      )}
      {decisions.map((decision: Decision, index: number) => {
        return (
          <Card
            className={cn(
              "p-4",
              index === 0
                ? "border-[#F5BF03]"
                : index === 1
                  ? "border-[#838996]"
                  : index === 2
                    ? "border-[#CD7F32]"
                    : ""
            )}
            key={decision.id}
          >
            {decision.decision} ({getDecisionValue(decision.factors)}%)
            {decision.factors.length < 2 && (
              <div className="text-destructive">
                You need at least two factors
              </div>
            )}
          </Card>
        )
      })}
    </div>
  )
}

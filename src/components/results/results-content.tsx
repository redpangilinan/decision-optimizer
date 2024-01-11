"use client"

import { Decision, Factor } from "@/types"

import { cn, getMultiplier } from "@/lib/utils"
import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { Card } from "@/components/ui/card"

export function ResultsContent() {
  const decisionStore = useDecisionStore()
  const decisions = decisionStore.decisions

  const getFactorScore = (factor: Factor) => {
    const importanceMultiplier = getMultiplier(factor.importance, [
      { case: "Very Unimportant", value: 0.6 },
      { case: "Unimportant", value: 0.8 },
      { case: "Neutral", value: 1.0 },
      { case: "Important", value: 1.2 },
      { case: "Very Important", value: 1.4 },
    ])

    return factor.value * importanceMultiplier
  }

  const getDecisionValue = (factors: Factor[]) => {
    const positiveSum = factors
      .filter((factor) => factor.type === "Positive")
      .reduce((sum, factor) => sum + getFactorScore(factor), 0)

    const negativeSum = factors
      .filter((factor) => factor.type === "Negative")
      .reduce((sum, factor) => sum + getFactorScore(factor), 0)

    const decisionValue =
      factors.length > 0 ? (positiveSum - negativeSum) / factors.length : 0

    return Number.isInteger(decisionValue)
      ? decisionValue.toFixed(0)
      : decisionValue.toFixed(2)
  }

  function getDecisionMessage(decisions: Decision[]) {
    const decisionValues = decisions.map((decision) =>
      parseFloat(getDecisionValue(decision.factors))
    )

    const maxDecisionValue = Math.max(...decisionValues)
    const uniqueDecisionValues = Array.from(new Set(decisionValues))

    if (uniqueDecisionValues.length === 1) {
      if (decisionValues[0] >= 0) {
        return "You can't go wrong with any of the top decisions."
      } else {
        return "All the top decisions are negative but equally the most optimal."
      }
    } else if (decisionValues[0] === decisionValues[1]) {
      if (decisionValues[0] >= 0) {
        return `Both ${decisions[0]?.decision} and ${decisions[1]?.decision} are the best decisions. You can pick either one.`
      } else {
        return `All decisions are negative but ${decisions[0]?.decision} and ${decisions[1]?.decision} is the most optimal.`
      }
    } else if (decisionValues[0] === maxDecisionValue) {
      if (decisionValues[0] >= 0) {
        return `${decisions[0]?.decision} is the most optimal decision.`
      } else {
        return `All decisions are negative but ${decisions[0]?.decision} is the most optimal.`
      }
    } else {
      return "No optimal decision found."
    }
  }

  decisions.sort((a, b) => {
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
      {decisions.map((decision, index) => {
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
            key={decision?.id}
          >
            {decision?.decision} ({getDecisionValue(decision?.factors)})
          </Card>
        )
      })}
    </div>
  )
}
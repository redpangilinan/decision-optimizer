"use client"

import { useDecisionStore } from "@/hooks/store/use-decision-store"
import { useStore } from "@/hooks/use-store"

import { DecisionCard } from "./decision-card"

export function DecisionList() {
  const decisions = useStore(useDecisionStore, (state) => state.decisions)

  if (!decisions || decisions.length === 0) {
    return <div>No decisions found.</div>
  }

  return (
    <>
      {[...decisions]
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
        .map((decision) => (
          <DecisionCard key={decision.id} data={decision} />
        ))}
    </>
  )
}

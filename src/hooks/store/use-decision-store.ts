import { Decision, Factor } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useDecisionStore = create(
  persist(
    (
      set: (
        fn: (state: {
          decisions: Decision[]
          addDecision: (decision: Decision) => void
          deleteDecision: (decisionId: string) => void
          addFactor: (decisionId: string, factor: Factor) => void
          deleteFactor: (decisionId: string, factorId: string) => void
        }) => void
      ) => void
    ) => ({
      decisions: [],
      addDecision: (decision: Decision) =>
        set((state) => ({ decisions: [...state.decisions, decision] })),
      deleteDecision: (decisionId: string) =>
        set((state) => ({
          decisions: state.decisions.filter(
            (decision: Decision) => decision.id !== decisionId
          ),
        })),
      addFactor: (decisionId: string, factor: Factor) =>
        set((state) => {
          const updatedDecisions = state.decisions.map((decision) => {
            if (decision.id === decisionId) {
              return { ...decision, factors: [...decision.factors, factor] }
            }
            return decision
          })

          return { decisions: updatedDecisions }
        }),
      deleteFactor: (decisionId: string, factorId: string) =>
        set((state) => {
          const updatedDecisions = state.decisions.map((decision) => {
            if (decision.id === decisionId) {
              return {
                ...decision,
                factors: decision.factors.filter(
                  (factor: Factor) => factor.id !== factorId
                ),
              }
            }
            return decision
          })

          return { decisions: updatedDecisions }
        }),
    }),
    {
      name: "decision-store",
    }
  )
)

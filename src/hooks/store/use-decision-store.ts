import { Decision, DecisionStore, Factor } from "@/types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Store {
  decisions: Decision[]
}

export const useDecisionStore = create(
  persist<DecisionStore>(
    (set) => ({
      decisions: [],
      addDecision: (decision: Decision) =>
        set((state: Store) => ({
          decisions: [...state.decisions, decision],
        })),
      deleteDecision: (decisionId: string) =>
        set((state: Store) => ({
          decisions: state.decisions.filter(
            (decision: Decision) => decision.id !== decisionId
          ),
        })),
      clearDecisions: () =>
        set(() => ({
          decisions: [],
        })),
      addFactor: (decisionId: string, factor: Factor) =>
        set((state: Store) => {
          const updatedDecisions = state.decisions.map((decision) => {
            if (decision.id === decisionId) {
              return { ...decision, factors: [...decision.factors, factor] }
            }
            return decision
          })

          return { decisions: updatedDecisions }
        }),
      deleteFactor: (decisionId: string, factorId: string) =>
        set((state: Store) => {
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

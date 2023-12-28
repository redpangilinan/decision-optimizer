import { Decision } from "@/types"
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
    }),
    {
      name: "decision-store",
    }
  )
)

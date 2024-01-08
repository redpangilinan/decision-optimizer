import * as z from "zod"

export const decisionSchema = z.object({
  decision: z.string().min(3).max(64),
})

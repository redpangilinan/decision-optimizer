import * as z from "zod"

export const decisionSchema = z.object({
  name: z.string().min(3).max(64),
})

import * as z from "zod"

export const factorSchema = z.object({
  factor: z.string().min(3).max(64),
  score: z.string().min(1).max(10),
  weight: z.string().min(1).max(10),
  type: z.enum(["positive", "negative"]),
})

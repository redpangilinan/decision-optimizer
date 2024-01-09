import * as z from "zod"

export const factorSchema = z.object({
  factor: z.string().min(3).max(64),
  value: z.array(z.number().min(0).max(100).default(0)),
  importance: z.enum([
    "Very Important",
    "Important",
    "Neutral",
    "Unimportant",
    "Very Unimportant",
  ]),
  type: z.enum(["Positive", "Negative"]),
})

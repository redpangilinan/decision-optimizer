import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Quotum",
  author: "redpangilinan",
  description: "Decision optimization web tool",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/redpangilinan/quotum",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}

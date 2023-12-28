import { DecisionList } from "@/components/decision/decision-list"

export default function Main() {
  return (
    <main className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      <DecisionList />
    </main>
  )
}

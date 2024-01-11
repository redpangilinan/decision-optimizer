import { DecisionAddButton } from "@/components/decision/decision-add-button"
import { DecisionList } from "@/components/decision/decision-list"

export default function Main() {
  return (
    <main className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
      <DecisionList />
      <DecisionAddButton variant="outline" />
    </main>
  )
}

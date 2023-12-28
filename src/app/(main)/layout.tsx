import { FloatNav } from "@/components/layout/float-nav"
import { Navbar } from "@/components/layout/navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="container">
      <Navbar />
      {children}
      <FloatNav />
    </div>
  )
}

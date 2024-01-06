import { Navbar } from "@/components/layout/navbar"

interface MainLayoutProps {
  children: React.ReactNode
}

export default async function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="container flex justify-center">
      <div className="w-full md:w-[768px]">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

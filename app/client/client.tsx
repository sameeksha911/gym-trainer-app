import type React from "react"
import { ClientSidebar } from "@/components/client-sidebar"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
      <ClientSidebar />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}

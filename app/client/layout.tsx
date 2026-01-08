"use client"

import type React from "react"
import { ClientSidebar } from "@/components/client-sidebar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated("client")) {
      router.push("/")
    }
  }, [router])

  if (!isAuthenticated("client")) {
    return null
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
      <ClientSidebar />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}

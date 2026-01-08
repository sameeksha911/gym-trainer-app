"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"

export default function TrainerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated("trainer")) {
      router.push("/")
    }
  }, [router])

  if (!isAuthenticated("trainer")) {
    return null
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex">
      <AppSidebar />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  )
}

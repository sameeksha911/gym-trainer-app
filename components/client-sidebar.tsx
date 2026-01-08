"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Activity, Ruler, Dumbbell } from "lucide-react"

export function ClientSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/client", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/client/log", icon: Activity, label: "Daily Log" },
    { href: "/client/measurements", icon: Ruler, label: "Measurements" },
  ]

  return (
    <aside className="w-20 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-6 space-y-8">
      <Link href="/client" className="h-12 w-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
        <Dumbbell className="h-7 w-7 text-cyan-400" />
      </Link>

      <nav className="flex-1 flex flex-col items-center space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
          return (
            <Link key={item.href} href={item.href}>
              <Button
                size="icon"
                variant="ghost"
                className={
                  isActive
                    ? "text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 bg-cyan-500/10"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
                }
                title={item.label}
              >
                <Icon className="h-5 w-5" />
              </Button>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

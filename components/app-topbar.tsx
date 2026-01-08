"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Menu, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { clearAuth } from "@/lib/auth"

interface AppTopbarProps {
  title: string
  subtitle: string
  userName?: string
  userInitials?: string
}

export function AppTopbar({ title, subtitle, userName = "Dilip", userInitials = "DL" }: AppTopbarProps) {
  const router = useRouter()

  const handleLogout = () => {
    clearAuth()
    router.push("/")
  }

  return (
    <header className="h-16 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost" className="lg:hidden text-zinc-400 hover:text-zinc-100">
          <Menu className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-lg font-semibold text-zinc-100">{title}</h1>
          <p className="text-xs text-zinc-500">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-zinc-100 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-cyan-500 rounded-full"></span>
        </Button>
        <div className="h-8 w-px bg-zinc-800"></div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors bg-transparent"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-zinc-100">{userName}</p>
            <p className="text-xs text-zinc-500">Trainer</p>
          </div>
          <Avatar className="h-9 w-9 border-2 border-cyan-500/30">
            <AvatarFallback className="bg-cyan-500/10 text-cyan-400 font-semibold">{userInitials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

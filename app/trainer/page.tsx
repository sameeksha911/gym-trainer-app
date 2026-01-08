"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Dumbbell, DollarSign, TrendingUp, Search } from "lucide-react"
import { AppTopbar } from "@/components/app-topbar"

export default function TrainerDashboard() {
  const stats = [
    { label: "Total Clients", value: "24", change: "+3", icon: <Users className="h-6 w-6" />, color: "text-cyan-400" },
    {
      label: "Active Plans",
      value: "18",
      change: "+2",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "text-emerald-400",
    },
    {
      label: "Revenue",
      value: "₹8,400",
      change: "+12%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-amber-400",
    },
    {
      label: "Avg Progress",
      value: "87%",
      change: "+5%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-purple-400",
    },
  ]

  const clients = [
    {
      id: 1,
      name: "Alex Johnson",
      plan: "Premium Plan",
      planStatus: "Active",
      status: "Active",
      progress: 85,
      lastActive: "2 hours ago",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      planStatusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      id: 2,
      name: "Sarah Williams",
      plan: "Basic Plan",
      planStatus: "Active",
      status: "Active",
      progress: 72,
      lastActive: "1 day ago",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      planStatusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      id: 3,
      name: "Mike Chen",
      plan: "Premium Plan",
      planStatus: "Inactive",
      status: "Pending",
      progress: 45,
      lastActive: "3 days ago",
      statusColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      planStatusColor: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
    },
    {
      id: 4,
      name: "Emily Davis",
      plan: "Basic Plan",
      planStatus: "Active",
      status: "Active",
      progress: 91,
      lastActive: "5 hours ago",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      planStatusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <AppTopbar title="Dashboard" subtitle="Welcome back, Dilip!" />

      <main className="w-full p-6 lg:p-8">
        <div className="max-w-[1600px] mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={stat.color}>{stat.icon}</div>
                    <Badge
                      variant="outline"
                      className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs"
                    >
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-zinc-400 mb-2">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-zinc-100">Client Overview</h2>
                  <p className="text-sm text-zinc-500">Manage and track your clients</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="pl-9 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 w-full sm:w-64"
                    />
                  </div>
                  <Link href="/trainer/register-client" className="w-full sm:w-auto">
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold w-full sm:w-auto">
                      Register New Client
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="w-full overflow-x-auto -mx-6 px-6">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Plan Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Last Active
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr key={client.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 border-2 border-zinc-700">
                              <AvatarFallback className="bg-zinc-800 text-zinc-300 font-semibold text-sm">
                                {client.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-zinc-100">{client.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-zinc-400">{client.plan}</span>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="outline" className={client.planStatusColor}>
                            {client.planStatus}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant="outline" className={client.statusColor}>
                            {client.status}
                          </Badge>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden max-w-[100px]">
                              <div
                                className="h-full bg-cyan-500 rounded-full"
                                style={{ width: `${client.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-cyan-400 w-10">{client.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-zinc-500">{client.lastActive}</span>
                        </td>
                        <td className="py-4 px-4">
                          <Link href={`/trainer/client/${client.id}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                            >
                              View
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AppTopbar } from "@/components/app-topbar"
import Link from "next/link"
import { Search } from "lucide-react"

export default function ClientsPage() {
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
    {
      id: 5,
      name: "Tom Anderson",
      plan: "Premium Plan",
      planStatus: "Active",
      status: "Active",
      progress: 78,
      lastActive: "6 hours ago",
      statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      planStatusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
  ]

  return (
    <>
      <AppTopbar title="Clients" subtitle="Manage all your clients" />

      <main className="flex-1 overflow-auto p-6">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-zinc-100">All Clients</h2>
                <p className="text-sm text-zinc-500">View and manage your client roster</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    className="pl-9 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 w-64"
                  />
                </div>
                <Link href="/trainer/register-client">
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold">
                    Register New Client
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
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
      </main>
    </>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, AlertTriangle, Users } from "lucide-react"
import { AppTopbar } from "@/components/app-topbar"
import { useState } from "react"

type Client = {
  id: number
  name: string
  planType: string
  feeAmount: number
  dueDate: string
  status: "pending" | "overdue" | "paid"
}

export default function FeesManagement() {
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "Alex Johnson",
      planType: "Premium Plan",
      feeAmount: 350,
      dueDate: "2026-02-15",
      status: "pending",
    },
    {
      id: 2,
      name: "Sarah Williams",
      planType: "Basic Plan",
      feeAmount: 200,
      dueDate: "2026-02-10",
      status: "overdue",
    },
    {
      id: 3,
      name: "Mike Davis",
      planType: "Premium Plan",
      feeAmount: 350,
      dueDate: "2026-02-20",
      status: "paid",
    },
    {
      id: 4,
      name: "Emily Chen",
      planType: "Standard Plan",
      feeAmount: 250,
      dueDate: "2026-02-08",
      status: "overdue",
    },
    {
      id: 5,
      name: "James Wilson",
      planType: "Basic Plan",
      feeAmount: 200,
      dueDate: "2026-02-18",
      status: "pending",
    },
    {
      id: 6,
      name: "Lisa Anderson",
      planType: "Premium Plan",
      feeAmount: 350,
      dueDate: "2026-02-12",
      status: "paid",
    },
  ])

  const handleMarkAsPaid = (clientId: number) => {
    setClients((prevClients) =>
      prevClients.map((client) => (client.id === clientId ? { ...client, status: "paid" as const } : client)),
    )
  }

  const handleSendReminder = () => {
    alert("Payment reminder sent successfully!")
  }

  const totalDue = clients.filter((c) => c.status !== "paid").reduce((sum, c) => sum + c.feeAmount, 0)
  const overdueAmount = clients.filter((c) => c.status === "overdue").reduce((sum, c) => sum + c.feeAmount, 0)
  const pendingCount = clients.filter((c) => c.status === "pending").length

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "paid":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400">Paid</span>
        )
      case "pending":
        return (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400">Pending</span>
        )
      case "overdue":
        return <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/20 text-red-400">Overdue</span>
      default:
        return null
    }
  }

  return (
    <>
      <AppTopbar title="Fees Management" subtitle="Track and manage client payments" />

      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-cyan-400" />
                  </div>
                  Total Fees Due
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-cyan-400">₹{totalDue.toLocaleString()}</div>
                <p className="text-xs text-zinc-500 mt-1">Outstanding payments</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-red-400" />
                  </div>
                  Overdue Amount
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-red-400">₹{overdueAmount.toLocaleString()}</div>
                <p className="text-xs text-zinc-500 mt-1">Requires immediate attention</p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-amber-400" />
                  </div>
                  Pending Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-400">{pendingCount}</div>
                <p className="text-xs text-zinc-500 mt-1">Clients with pending payments</p>
              </CardContent>
            </Card>
          </div>

          {/* Client Fees Table */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-2xl">Client Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-4 px-4 text-sm font-semibold text-zinc-400">Client Name</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-zinc-400">Plan Type</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-zinc-400">Fee Amount</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-zinc-400">Due Date</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-zinc-400">Status</th>
                      <th className="text-left py-4 px-4 text-sm font-semibold text-zinc-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map((client) => (
                      <tr
                        key={client.id}
                        className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                      >
                        <td className="py-4 px-4 text-zinc-100 font-medium">{client.name}</td>
                        <td className="py-4 px-4 text-zinc-400">{client.planType}</td>
                        <td className="py-4 px-4 text-zinc-100 font-semibold">₹{client.feeAmount}</td>
                        <td className="py-4 px-4 text-zinc-400">
                          {new Date(client.dueDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-4 px-4">{getStatusBadge(client.status)}</td>
                        <td className="py-4 px-4">
                          {client.status !== "paid" && (
                            <Button
                              size="sm"
                              className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-medium"
                              onClick={() => handleMarkAsPaid(client.id)}
                            >
                              Mark as Paid
                            </Button>
                          )}
                          {client.status === "paid" && <span className="text-xs text-zinc-600">No action needed</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Reminder Section */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-2xl">Send Payment Reminder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Select Client</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option value="">Choose a client...</option>
                    {clients
                      .filter((c) => c.status !== "paid")
                      .map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name} - ₹{client.feeAmount} ({client.status})
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Reminder Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold w-full md:w-auto"
                  onClick={handleSendReminder}
                >
                  Send Reminder
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}

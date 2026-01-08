"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, Calendar, Clock, CheckCircle, Plus, Edit2, Scale, Activity } from "lucide-react"
import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { AppTopbar } from "@/components/app-topbar"
import Image from "next/image"

type Measurement = {
  date: string
  height: string
  weight: string
  bodyFat: string
  neck: string
  shoulder: string
  arms: string
  chest: string
  upperWaist: string
  lowerWaist: string
  hips: string
  thighs: string
  calf: string
}

type DailyLog = {
  date: string
  steps: string
  weight: string
  breakfast: string
  midMorning: string
  lunch: string
  snack: string
  dinner: string
  water: string
  workout: string
  sleep: string
}

type ProgressPhoto = {
  date: string
  front: string
  side: string
  back: string
}

export default function ClientProfile() {
  const [feeStatus, setFeeStatus] = useState<"paid" | "pending" | "overdue">("pending")
  const [planStatus, setPlanStatus] = useState<"Active" | "Inactive">("Active")
  const [paymentMethod, setPaymentMethod] = useState("Direct Bank Transfer")
  const [lastPaymentDate, setLastPaymentDate] = useState("2026-01-15")
  const [isEditingPayment, setIsEditingPayment] = useState(false)

  const [measurements, setMeasurements] = useState<Measurement[]>([
    {
      date: "Jan 7, 2026",
      height: "183 cm",
      weight: "84 kg",
      bodyFat: "18.5%",
      neck: "39 cm",
      shoulder: "122 cm",
      arms: "38 cm",
      chest: "107 cm",
      upperWaist: "84 cm",
      lowerWaist: "86 cm",
      hips: "102 cm",
      thighs: "61 cm",
      calf: "39 cm",
    },
    {
      date: "Dec 7, 2025",
      height: "183 cm",
      weight: "85 kg",
      bodyFat: "19.2%",
      neck: "40 cm",
      shoulder: "121 cm",
      arms: "38 cm",
      chest: "105 cm",
      upperWaist: "86 cm",
      lowerWaist: "89 cm",
      hips: "103 cm",
      thighs: "62 cm",
      calf: "40 cm",
    },
    {
      date: "Nov 7, 2025",
      height: "183 cm",
      weight: "87 kg",
      bodyFat: "20.1%",
      neck: "41 cm",
      shoulder: "119 cm",
      arms: "37 cm",
      chest: "104 cm",
      upperWaist: "89 cm",
      lowerWaist: "91 cm",
      hips: "104 cm",
      thighs: "64 cm",
      calf: "41 cm",
    },
    {
      date: "Oct 7, 2025",
      height: "183 cm",
      weight: "88 kg",
      bodyFat: "21.0%",
      neck: "41 cm",
      shoulder: "118 cm",
      arms: "36 cm",
      chest: "103 cm",
      upperWaist: "91 cm",
      lowerWaist: "94 cm",
      hips: "105 cm",
      thighs: "65 cm",
      calf: "41 cm",
    },
  ])

  const [dailyWeightHistory] = useState([
    { date: "Jan 7", weight: 84.0 },
    { date: "Jan 6", weight: 84.2 },
    { date: "Jan 5", weight: 84.4 },
    { date: "Jan 4", weight: 84.5 },
    { date: "Jan 3", weight: 84.6 },
    { date: "Jan 2", weight: 84.8 },
    { date: "Jan 1", weight: 85.0 },
    { date: "Dec 31", weight: 85.2 },
    { date: "Dec 30", weight: 85.3 },
    { date: "Dec 29", weight: 85.4 },
  ])

  const [dailyLogs] = useState<DailyLog[]>([
    {
      date: "Jan 7, 2026",
      steps: "8,432",
      weight: "84.0",
      breakfast: "Oatmeal, eggs, protein shake",
      midMorning: "Greek yogurt with almonds",
      lunch: "Grilled chicken, brown rice",
      snack: "Protein bar",
      dinner: "Salmon, sweet potato, salad",
      water: "2.4L",
      workout: "Yes - Chest & Triceps",
      sleep: "7.5 hrs",
    },
    {
      date: "Jan 6, 2026",
      steps: "10,234",
      weight: "84.2",
      breakfast: "Scrambled eggs, toast",
      midMorning: "Apple with peanut butter",
      lunch: "Turkey sandwich, vegetables",
      snack: "Protein shake",
      dinner: "Chicken breast, quinoa",
      water: "3.0L",
      workout: "Yes - Back & Biceps",
      sleep: "8.0 hrs",
    },
    {
      date: "Jan 5, 2026",
      steps: "7,891",
      weight: "84.4",
      breakfast: "Protein pancakes",
      midMorning: "Banana",
      lunch: "Beef stir-fry, rice",
      snack: "Mixed nuts",
      dinner: "Grilled fish, vegetables",
      water: "2.8L",
      workout: "Yes - Legs",
      sleep: "7.0 hrs",
    },
  ])

  const [progressPhotos] = useState<ProgressPhoto[]>([
    {
      date: "Jan 7, 2026",
      front: "/fit-man-front-view-gym.jpg",
      side: "/fit-man-side-view-gym.jpg",
      back: "/fit-man-back-view-gym.jpg",
    },
    {
      date: "Dec 7, 2025",
      front: "/man-front-view-fitness.jpg",
      side: "/man-side-view-fitness.jpg",
      back: "/man-back-view-fitness.jpg",
    },
    {
      date: "Nov 7, 2025",
      front: "/overweight-man-front-view.jpg",
      side: "/overweight-man-side-view.jpg",
      back: "/overweight-man-back-view.jpg",
    },
  ])

  const [showAddMeasurement, setShowAddMeasurement] = useState(false)
  const [newMeasurement, setNewMeasurement] = useState({
    date: new Date().toISOString().split("T")[0],
    height: "",
    weight: "",
    bodyFat: "",
    neck: "",
    shoulder: "",
    arms: "",
    chest: "",
    upperWaist: "",
    lowerWaist: "",
    hips: "",
    thighs: "",
    calf: "",
  })

  const progressData = [
    { month: "Oct", weight: 88, bodyFat: 21.0 },
    { month: "Nov", weight: 87, bodyFat: 20.1 },
    { month: "Dec", weight: 85, bodyFat: 19.2 },
    { month: "Jan", weight: 84, bodyFat: 18.5 },
  ]

  const getStatusBadge = (status: "paid" | "pending" | "overdue") => {
    const variants = {
      paid: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      pending: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      overdue: "bg-red-500/20 text-red-400 border-red-500/30",
    }
    return (
      <Badge variant="outline" className={`${variants[status]} capitalize font-medium text-sm`}>
        {status}
      </Badge>
    )
  }

  const handleMarkPaid = () => {
    setFeeStatus("paid")
  }

  const handleTogglePlanStatus = () => {
    setPlanStatus((prev) => (prev === "Active" ? "Inactive" : "Active"))
  }

  const handleSavePaymentDetails = () => {
    setIsEditingPayment(false)
  }

  const handleAddMeasurement = () => {
    const formattedMeasurement: Measurement = {
      date: new Date(newMeasurement.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      height: newMeasurement.height + " cm",
      weight: newMeasurement.weight + " kg",
      bodyFat: newMeasurement.bodyFat + "%",
      neck: newMeasurement.neck + " cm",
      shoulder: newMeasurement.shoulder + " cm",
      arms: newMeasurement.arms + " cm",
      chest: newMeasurement.chest + " cm",
      upperWaist: newMeasurement.upperWaist + " cm",
      lowerWaist: newMeasurement.lowerWaist + " cm",
      hips: newMeasurement.hips + " cm",
      thighs: newMeasurement.thighs + " cm",
      calf: newMeasurement.calf + " cm",
    }

    setMeasurements([formattedMeasurement, ...measurements])
    setShowAddMeasurement(false)
    setNewMeasurement({
      date: new Date().toISOString().split("T")[0],
      height: "",
      weight: "",
      bodyFat: "",
      neck: "",
      shoulder: "",
      arms: "",
      chest: "",
      upperWaist: "",
      lowerWaist: "",
      hips: "",
      thighs: "",
      calf: "",
    })
  }

  return (
    <>
      {/* AppTopbar and Back Button */}
      <AppTopbar title="Client Profile" subtitle="Alex Johnson - Premium Plan" />

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-8 space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Back Button */}
          <div>
            <Link href="/trainer">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 -ml-2">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Clients
              </Button>
            </Link>
          </div>

          {/* Client Info & Fees Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Client Basic Info Card */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-zinc-100">Client Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20 border-2 border-cyan-500/30">
                    <AvatarFallback className="bg-cyan-500/10 text-cyan-400 font-semibold text-2xl">AJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-semibold text-zinc-100">Alex Johnson</h3>
                    <div className="flex gap-2">
                      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Premium Plan</Badge>
                      <Badge
                        variant="outline"
                        className={
                          planStatus === "Active"
                            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                            : "bg-zinc-500/20 text-zinc-400 border-zinc-500/30"
                        }
                      >
                        {planStatus}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-zinc-500" />
                    <span className="text-zinc-300">alex.johnson@email.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-zinc-500" />
                    <span className="text-zinc-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-zinc-500" />
                    <span className="text-zinc-300">Joined: Nov 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-zinc-500" />
                    <span className="text-zinc-300">Sessions: Mon, Wed, Fri (6:00 AM)</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <Button
                    onClick={handleTogglePlanStatus}
                    className="w-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700"
                  >
                    Mark as {planStatus === "Active" ? "Inactive" : "Active"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Fees Card */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-zinc-100">Fee Information</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditingPayment(!isEditingPayment)}
                    className="text-zinc-400 hover:text-cyan-400"
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-400">Monthly Fee</span>
                    <span className="text-2xl font-bold text-cyan-400">₹350</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-400">Due Date</span>
                    <span className="text-base font-medium text-zinc-300">Feb 15, 2026</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-zinc-400">Status</span>
                    {getStatusBadge(feeStatus)}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800">
                  <Button
                    onClick={handleMarkPaid}
                    disabled={feeStatus === "paid"}
                    className={`w-full ${
                      feeStatus === "paid"
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 cursor-not-allowed"
                        : "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border-cyan-500/30"
                    } border`}
                  >
                    {feeStatus === "paid" ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Payment Received
                      </>
                    ) : (
                      "Mark as Paid"
                    )}
                  </Button>
                </div>

                <div className="pt-2 border-t border-zinc-800 space-y-3">
                  <div className="space-y-2">
                    <Label className="text-xs text-zinc-500">Payment Method</Label>
                    {isEditingPayment ? (
                      <Input
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-zinc-100 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-zinc-300">{paymentMethod}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs text-zinc-500">Last Payment Date</Label>
                    {isEditingPayment ? (
                      <Input
                        type="date"
                        value={lastPaymentDate}
                        onChange={(e) => setLastPaymentDate(e.target.value)}
                        className="bg-zinc-800 border-zinc-700 text-zinc-100 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-zinc-300">
                        {new Date(lastPaymentDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                  {isEditingPayment && (
                    <Button
                      onClick={handleSavePaymentDetails}
                      size="sm"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-zinc-950"
                    >
                      Save Changes
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Scale className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-zinc-100">Daily Weight History</CardTitle>
                  <p className="text-sm text-zinc-500">Last 30 days weight tracking</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {dailyWeightHistory.map((entry, index) => (
                  <div key={index} className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-800 text-center">
                    <p className="text-xs text-zinc-500 mb-2">{entry.date}</p>
                    <p className="text-xl font-bold text-purple-400">{entry.weight} kg</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Daily Logs Card */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold text-zinc-100">Daily Logs</CardTitle>
                  <p className="text-sm text-zinc-500">Client's submitted daily activity logs</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Weight (kg)
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Steps
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Breakfast
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Mid-Morning
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Lunch
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Snack
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Dinner
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Water
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Workout
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Sleep
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dailyLogs.map((log, index) => (
                      <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                        <td className="py-3 px-4 text-sm text-zinc-300 font-medium">{log.date}</td>
                        <td className="py-3 px-4 text-sm text-purple-400 font-semibold">{log.weight} kg</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.steps}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.breakfast}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.midMorning}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.lunch}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.snack}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.dinner}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.water}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.workout}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{log.sleep}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Progress Chart */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-zinc-100">Progress Chart</CardTitle>
              <p className="text-sm text-zinc-500">Weight and body fat tracking over time</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="month" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#a1a1aa" }}
                    />
                    <Line type="monotone" dataKey="weight" stroke="#06b6d4" strokeWidth={2} name="Weight (kg)" />
                    <Line type="monotone" dataKey="bodyFat" stroke="#a855f7" strokeWidth={2} name="Body Fat %" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Measurements Management */}
          {/* This section is replaced by the consolidated Body Measurements Section below */}

          {/* Body Measurements Section */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold text-zinc-100">Body Measurements</CardTitle>
                  <p className="text-sm text-zinc-500">Track physical progress over time</p>
                </div>
                <Button
                  onClick={() => setShowAddMeasurement(!showAddMeasurement)}
                  size="sm"
                  className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add Measurement
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Add Measurement Form */}
              {showAddMeasurement && (
                <div className="mb-6 p-4 border border-zinc-800 rounded-lg bg-zinc-800/50">
                  <h4 className="text-sm font-semibold text-zinc-300 mb-4">Add New Measurement</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <Label className="text-xs text-zinc-400">Date</Label>
                      <Input
                        type="date"
                        value={newMeasurement.date}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, date: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Height (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.height}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, height: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Weight (kg)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.weight}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, weight: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Body Fat %</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.bodyFat}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, bodyFat: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Neck (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.neck}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, neck: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Shoulder (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.shoulder}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, shoulder: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Arms (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.arms}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, arms: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Chest (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.chest}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, chest: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Upper Waist (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.upperWaist}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, upperWaist: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Lower Waist (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.lowerWaist}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, lowerWaist: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Hips (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.hips}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, hips: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Thighs (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.thighs}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, thighs: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400">Calf (cm)</Label>
                      <Input
                        type="number"
                        step="0.1"
                        value={newMeasurement.calf}
                        onChange={(e) => setNewMeasurement({ ...newMeasurement, calf: e.target.value })}
                        className="bg-zinc-900 border-zinc-700 text-zinc-100 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleAddMeasurement}
                      size="sm"
                      className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950"
                    >
                      Save Measurement
                    </Button>
                    <Button
                      onClick={() => setShowAddMeasurement(false)}
                      size="sm"
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 hover:bg-zinc-800"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Measurements Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Height
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Weight
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Body Fat %
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Neck
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Shoulder
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Arms
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Chest
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        U. Waist
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        L. Waist
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Hips
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Thighs
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Calf
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurements.map((measurement, index) => (
                      <tr key={index} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                        <td className="py-3 px-4 text-sm text-zinc-300 font-medium">{measurement.date}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.height}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.weight}</td>
                        <td className="py-3 px-4 text-sm text-purple-400 font-semibold">{measurement.bodyFat}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.neck}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.shoulder}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.arms}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.chest}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.upperWaist}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.lowerWaist}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.hips}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.thighs}</td>
                        <td className="py-3 px-4 text-sm text-zinc-400">{measurement.calf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Progress Photos - Unchanged */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-zinc-100">Progress Photos</CardTitle>
              <p className="text-sm text-zinc-500">Client's transformation photos by date</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {progressPhotos.map((photoSet, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="text-sm font-semibold text-cyan-400">{photoSet.date}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Front</p>
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700">
                        <Image
                          src={photoSet.front || "/placeholder.svg"}
                          alt="Front view"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Side</p>
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700">
                        <Image
                          src={photoSet.side || "/placeholder.svg"}
                          alt="Side view"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Back</p>
                      <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700">
                        <Image
                          src={photoSet.back || "/placeholder.svg"}
                          alt="Back view"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Progress Charts - Unchanged */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-100">Weight Progress</CardTitle>
                <p className="text-sm text-zinc-500 mt-1">4-month trend</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="month" stroke="#71717a" style={{ fontSize: "12px" }} />
                    <YAxis stroke="#71717a" style={{ fontSize: "12px" }} domain={[180, 200]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "8px",
                        color: "#fafafa",
                      }}
                    />
                    <Line type="monotone" dataKey="weight" stroke="#22d3ee" strokeWidth={2} dot={{ fill: "#22d3ee" }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-100">Body Fat Progress</CardTitle>
                <p className="text-sm text-zinc-500 mt-1">4-month trend</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="month" stroke="#71717a" style={{ fontSize: "12px" }} />
                    <YAxis stroke="#71717a" style={{ fontSize: "12px" }} domain={[17, 22]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#18181b",
                        border: "1px solid #27272a",
                        borderRadius: "8px",
                        color: "#fafafa",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="bodyFat"
                      stroke="#34d399"
                      strokeWidth={2}
                      dot={{ fill: "#34d399" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Workout and Diet Plans - Unchanged */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Workout Plan */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-100">Current Workout Plan</CardTitle>
                <p className="text-sm text-zinc-500 mt-1">Week 3 of 12-week program</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-semibold text-zinc-100">Monday - Upper Body</h4>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">Active</Badge>
                    </div>
                    <ul className="text-xs text-zinc-400 space-y-1">
                      <li>• Bench Press: 4 sets × 8-10 reps</li>
                      <li>• Pull-ups: 4 sets × 8-10 reps</li>
                      <li>• Shoulder Press: 3 sets × 10-12 reps</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-semibold text-zinc-100">Wednesday - Lower Body</h4>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">Active</Badge>
                    </div>
                    <ul className="text-xs text-zinc-400 space-y-1">
                      <li>• Squats: 4 sets × 8-10 reps</li>
                      <li>• Romanian Deadlifts: 4 sets × 8-10 reps</li>
                      <li>• Leg Press: 3 sets × 12-15 reps</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-semibold text-zinc-100">Friday - Full Body</h4>
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">Active</Badge>
                    </div>
                    <ul className="text-xs text-zinc-400 space-y-1">
                      <li>• Deadlifts: 4 sets × 6-8 reps</li>
                      <li>• Overhead Press: 3 sets × 8-10 reps</li>
                      <li>• Lunges: 3 sets × 10 reps each leg</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700">
                  View Full Program
                </Button>
              </CardContent>
            </Card>

            {/* Diet Plan */}
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-zinc-100">Current Diet Plan</CardTitle>
                <p className="text-sm text-zinc-500 mt-1">Cutting phase - 2,200 cal/day</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <p className="text-xs text-zinc-400 mb-1">Protein</p>
                    <p className="text-lg font-bold text-cyan-400">180g</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <p className="text-xs text-zinc-400 mb-1">Carbs</p>
                    <p className="text-lg font-bold text-emerald-400">220g</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <p className="text-xs text-zinc-400 mb-1">Fats</p>
                    <p className="text-lg font-bold text-amber-400">65g</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <h4 className="text-sm font-semibold text-zinc-100 mb-2">Breakfast (6:30 AM)</h4>
                    <p className="text-xs text-zinc-400">4 egg whites, 2 whole eggs, oatmeal with berries</p>
                    <p className="text-xs text-zinc-500 mt-1">~550 calories</p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <h4 className="text-sm font-semibold text-zinc-100 mb-2">Lunch (12:30 PM)</h4>
                    <p className="text-xs text-zinc-400">Grilled chicken breast, brown rice, mixed vegetables</p>
                    <p className="text-xs text-zinc-500 mt-1">~650 calories</p>
                  </div>

                  <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
                    <h4 className="text-sm font-semibold text-zinc-100 mb-2">Dinner (7:00 PM)</h4>
                    <p className="text-xs text-zinc-400">Salmon fillet, quinoa, steamed broccoli</p>
                    <p className="text-xs text-zinc-500 mt-1">~600 calories</p>
                  </div>
                </div>

                <Button className="w-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-zinc-700">
                  View Full Meal Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  )
}

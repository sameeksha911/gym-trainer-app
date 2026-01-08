"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Activity, Droplet, Dumbbell, Utensils, DollarSign, Calendar, Scale, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { clearAuth } from "@/lib/auth"

type Exercise = {
  name: string
  sets: number
  reps: string
  rest: string
}

type Meal = {
  name: string
  time: string
  calories: number
  description: string
}

export default function ClientDashboard() {
  const [dailyWeight, setDailyWeight] = useState("")
  const [weightHistory, setWeightHistory] = useState([
    { date: "Jan 7", weight: 84.0 },
    { date: "Jan 6", weight: 84.2 },
    { date: "Jan 5", weight: 84.4 },
    { date: "Jan 4", weight: 84.5 },
    { date: "Jan 3", weight: 84.6 },
    { date: "Jan 2", weight: 84.8 },
    { date: "Jan 1", weight: 85.0 },
  ])
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    clearAuth()
    router.push("/")
  }

  const todaysStats = [
    {
      label: "Steps Today",
      value: "8,432",
      target: "10,000",
      icon: <Activity className="h-6 w-6" />,
      color: "text-cyan-400",
    },
    {
      label: "Water Intake",
      value: "2.4L",
      target: "3.0L",
      icon: <Droplet className="h-6 w-6" />,
      color: "text-blue-400",
    },
    {
      label: "Workout Completed",
      value: "1/1",
      target: "100%",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "text-emerald-400",
    },
    {
      label: "Body Fat %",
      value: "18.5%",
      target: "Target: 15%",
      icon: <Scale className="h-6 w-6" />,
      color: "text-purple-400",
    },
  ]

  const exercises = [
    { name: "Barbell Bench Press", sets: 4, reps: "8-10", rest: "90s" },
    { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "60s" },
    { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "45s" },
    { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "45s" },
    { name: "Overhead Tricep Extension", sets: 3, reps: "10-12", rest: "60s" },
  ]

  const meals = [
    { name: "Breakfast", time: "7:00 AM", calories: 450, description: "Oatmeal with berries, eggs, protein shake" },
    { name: "Mid-Morning Snack", time: "10:00 AM", calories: 250, description: "Greek yogurt with almonds" },
    { name: "Lunch", time: "1:00 PM", calories: 600, description: "Grilled chicken, brown rice, vegetables" },
    { name: "Post-Workout", time: "5:00 PM", calories: 300, description: "Protein shake with banana" },
    { name: "Dinner", time: "7:30 PM", calories: 550, description: "Salmon, sweet potato, salad" },
  ]

  const handleSaveWeight = () => {
    if (dailyWeight) {
      const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" })
      setWeightHistory([{ date: today, weight: Number.parseFloat(dailyWeight) }, ...weightHistory.slice(0, 6)])
      setDailyWeight("")
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  }

  return (
    <>
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">My Dashboard</h2>
            <p className="text-xs text-zinc-500">Track your fitness journey</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
            <span className="text-sm text-zinc-400">Alex Johnson</span>
            <Avatar className="h-9 w-9 border-2 border-cyan-500/30">
              <AvatarFallback className="bg-cyan-500/10 text-cyan-400 font-semibold">AJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8 space-y-8 overflow-auto">
        {/* Summary Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todaysStats.map((stat) => (
            <Card key={stat.label} className="bg-zinc-900 border-zinc-800">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={stat.color}>{stat.icon}</div>
                  <Badge variant="outline" className="bg-zinc-800/50 text-zinc-400 border-zinc-700 text-xs">
                    {stat.target}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-zinc-400 mb-2">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Daily Weight Tracking Section */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Scale className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">Daily Weight Tracking</h3>
                <p className="text-sm text-zinc-500">Log your weight daily to track progress</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weight Input */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-zinc-300 text-sm">Today's Weight (kg)</Label>
                  <div className="flex gap-3">
                    <Input
                      type="number"
                      step="0.1"
                      placeholder="Enter weight"
                      value={dailyWeight}
                      onChange={(e) => setDailyWeight(e.target.value)}
                      className="bg-zinc-800 border-zinc-700 text-zinc-100 flex-1"
                    />
                    <Button
                      onClick={handleSaveWeight}
                      disabled={!dailyWeight}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-6"
                    >
                      Save Weight
                    </Button>
                  </div>
                  {showSuccess && (
                    <p className="text-sm text-emerald-400 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Weight saved successfully!
                    </p>
                  )}
                </div>
              </div>

              {/* Last 7 Days */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-zinc-300">Last 7 Days</h4>
                <div className="space-y-2">
                  {weightHistory.map((entry, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border border-zinc-800"
                    >
                      <span className="text-sm text-zinc-400">{entry.date}</span>
                      <span className="text-base font-semibold text-purple-400">{entry.weight} kg</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fee Status Card */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <DollarSign className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">Payment Due</h3>
                    <p className="text-sm text-zinc-500">Your next subscription payment</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Amount Due</p>
                    <p className="text-2xl font-bold text-amber-400">₹350</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Due Date</p>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-zinc-400" />
                      <p className="text-lg font-semibold text-zinc-300">Feb 15, 2026</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Status</p>
                    <Badge variant="outline" className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-sm">
                      Pending
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assigned Workout Plan */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-0">
            <div className="px-6 py-5 border-b border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Today's Workout</h3>
                  <p className="text-sm text-zinc-500">Chest & Triceps - 5 exercises</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div
                    key={exercise.name}
                    className="flex items-center gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-emerald-400">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-zinc-100 mb-1">{exercise.name}</p>
                      <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <span>
                          <span className="font-medium text-zinc-300">{exercise.sets}</span> sets
                        </span>
                        <span>•</span>
                        <span>
                          <span className="font-medium text-zinc-300">{exercise.reps}</span> reps
                        </span>
                        <span>•</span>
                        <span>
                          <span className="font-medium text-zinc-300">{exercise.rest}</span> rest
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assigned Diet Plan */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-0">
            <div className="px-6 py-5 border-b border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Utensils className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Today's Nutrition Plan</h3>
                  <p className="text-sm text-zinc-500">Total: 2,150 calories - 5 meals</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {meals.map((meal) => (
                  <div
                    key={meal.name}
                    className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <Utensils className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-zinc-100">{meal.name}</p>
                          <p className="text-sm text-zinc-400">{meal.time}</p>
                        </div>
                        <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                          {meal.calories} cal
                        </Badge>
                      </div>
                      <p className="text-sm text-zinc-500">{meal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Log Data Button */}
        <div className="flex justify-center pt-4 pb-8">
          <Link href="/client/log">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold px-8 py-6 text-base">
              <Activity className="h-5 w-5 mr-2" />
              Log Today's Data
            </Button>
          </Link>
        </div>
      </main>
    </>
  )
}

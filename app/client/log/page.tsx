"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Activity, Droplet, Dumbbell, Utensils, Moon, ImageIcon, ArrowLeft, CheckCircle2, Scale } from "lucide-react"

type Exercise = {
  id: string
  name: string
  sets: number
  reps: string
}

type DailyLog = {
  date: string
  steps: string
  weight: string
  breakfast: string
  midMorningSnack: string
  lunch: string
  eveningSnack: string
  dinner: string
  water: string
  sleep: string
  completedExercises: number
}

export default function DailyLogForm() {
  const [stepsToday, setStepsToday] = useState("")
  const [dailyWeight, setDailyWeight] = useState("")
  const [breakfast, setBreakfast] = useState("")
  const [midMorningSnack, setMidMorningSnack] = useState("")
  const [lunch, setLunch] = useState("")
  const [eveningSnack, setEveningSnack] = useState("")
  const [dinner, setDinner] = useState("")
  const [waterIntake, setWaterIntake] = useState("")
  const [sleepHours, setSleepHours] = useState("")
  const [completedExercises, setCompletedExercises] = useState<string[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [recentLogs, setRecentLogs] = useState<DailyLog[]>([])

  const exercises: Exercise[] = [
    { id: "ex1", name: "Barbell Bench Press", sets: 4, reps: "8-10" },
    { id: "ex2", name: "Incline Dumbbell Press", sets: 3, reps: "10-12" },
    { id: "ex3", name: "Cable Flyes", sets: 3, reps: "12-15" },
    { id: "ex4", name: "Tricep Pushdowns", sets: 3, reps: "12-15" },
    { id: "ex5", name: "Overhead Tricep Extension", sets: 3, reps: "10-12" },
  ]

  const handleExerciseToggle = (exerciseId: string) => {
    setCompletedExercises((prev) =>
      prev.includes(exerciseId) ? prev.filter((id) => id !== exerciseId) : [...prev, exerciseId],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newLog: DailyLog = {
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      steps: stepsToday,
      weight: dailyWeight,
      breakfast,
      midMorningSnack,
      lunch,
      eveningSnack,
      dinner,
      water: waterIntake,
      sleep: sleepHours,
      completedExercises: completedExercises.length,
    }

    setRecentLogs((prev) => [newLog, ...prev.slice(0, 4)])
    setShowSuccess(true)

    // Reset form
    setStepsToday("")
    setDailyWeight("")
    setBreakfast("")
    setMidMorningSnack("")
    setLunch("")
    setEveningSnack("")
    setDinner("")
    setWaterIntake("")
    setSleepHours("")
    setCompletedExercises([])

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/client">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">Log Today's Data</h2>
              <p className="text-xs text-zinc-500">Track your daily progress</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-400">Alex Johnson</span>
            <Avatar className="h-9 w-9 border-2 border-cyan-500/30">
              <AvatarFallback className="bg-cyan-500/10 text-cyan-400 font-semibold">AJ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Form Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {showSuccess && (
          <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <p className="text-emerald-400 font-medium">Today's log submitted successfully.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Steps Today */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Steps Today</h3>
                  <p className="text-sm text-zinc-500">Enter the number of steps you've walked</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="steps" className="text-zinc-300">
                  Steps
                </Label>
                <Input
                  id="steps"
                  type="number"
                  placeholder="e.g., 8432"
                  value={stepsToday}
                  onChange={(e) => setStepsToday(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Daily Weight */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Scale className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Daily Weight</h3>
                  <p className="text-sm text-zinc-500">Record your weight for today</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-zinc-300">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 84.5"
                  value={dailyWeight}
                  onChange={(e) => setDailyWeight(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Meals */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <Utensils className="h-5 w-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Meals</h3>
                  <p className="text-sm text-zinc-500">Log your meals throughout the day</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="breakfast" className="text-zinc-300">
                    Breakfast
                  </Label>
                  <Textarea
                    id="breakfast"
                    placeholder="e.g., Oatmeal with berries and protein shake"
                    value={breakfast}
                    onChange={(e) => setBreakfast(e.target.value)}
                    rows={2}
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mid-morning-snack" className="text-zinc-300">
                    Mid-Morning Snack
                  </Label>
                  <Textarea
                    id="mid-morning-snack"
                    placeholder="e.g., Greek yogurt with almonds"
                    value={midMorningSnack}
                    onChange={(e) => setMidMorningSnack(e.target.value)}
                    rows={2}
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lunch" className="text-zinc-300">
                    Lunch
                  </Label>
                  <Textarea
                    id="lunch"
                    placeholder="e.g., Grilled chicken with rice and vegetables"
                    value={lunch}
                    onChange={(e) => setLunch(e.target.value)}
                    rows={2}
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="evening-snack" className="text-zinc-300">
                    Evening Snack
                  </Label>
                  <Textarea
                    id="evening-snack"
                    placeholder="e.g., Protein bar or nuts"
                    value={eveningSnack}
                    onChange={(e) => setEveningSnack(e.target.value)}
                    rows={2}
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dinner" className="text-zinc-300">
                    Dinner
                  </Label>
                  <Textarea
                    id="dinner"
                    placeholder="e.g., Salmon with quinoa and broccoli"
                    value={dinner}
                    onChange={(e) => setDinner(e.target.value)}
                    rows={2}
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meal-image" className="text-zinc-300">
                    Meal Image (Optional)
                  </Label>
                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100"
                    >
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Upload Image
                    </Button>
                    <span className="text-sm text-zinc-500">No file chosen</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Water Intake */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Droplet className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Water Intake</h3>
                  <p className="text-sm text-zinc-500">How much water did you drink today?</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="water" className="text-zinc-300">
                  Water (Liters)
                </Label>
                <Input
                  id="water"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 2.5"
                  value={waterIntake}
                  onChange={(e) => setWaterIntake(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Workout Completed */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Dumbbell className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Workout Completed</h3>
                  <p className="text-sm text-zinc-500">Check off the exercises you completed</p>
                </div>
              </div>
              <div className="space-y-3">
                {exercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="flex items-start gap-3 p-4 rounded-lg bg-zinc-800/50 border border-zinc-800"
                  >
                    <Checkbox
                      id={exercise.id}
                      checked={completedExercises.includes(exercise.id)}
                      onCheckedChange={() => handleExerciseToggle(exercise.id)}
                      className="mt-1 border-zinc-600 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500"
                    />
                    <div className="flex-1">
                      <Label htmlFor={exercise.id} className="text-zinc-100 font-medium cursor-pointer">
                        {exercise.name}
                      </Label>
                      <p className="text-sm text-zinc-400 mt-1">
                        {exercise.sets} sets × {exercise.reps} reps
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sleep Hours */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Moon className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Sleep Hours</h3>
                  <p className="text-sm text-zinc-500">How many hours did you sleep last night?</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sleep" className="text-zinc-300">
                  Hours
                </Label>
                <Input
                  id="sleep"
                  type="number"
                  step="0.5"
                  placeholder="e.g., 7.5"
                  value={sleepHours}
                  onChange={(e) => setSleepHours(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-4 pb-8">
            <Button
              type="submit"
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold px-12 py-6 text-base"
            >
              <Activity className="h-5 w-5 mr-2" />
              Submit Daily Log
            </Button>
          </div>
        </form>

        {recentLogs.length > 0 && (
          <Card className="bg-zinc-900 border-zinc-800 mt-8">
            <CardContent className="p-0">
              <div className="px-6 py-5 border-b border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-100">Recent Logs</h3>
                <p className="text-sm text-zinc-500">Your recently submitted daily logs</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Weight (kg)
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Steps
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Water (L)
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Sleep (hrs)
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        Exercises
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {recentLogs.map((log, index) => (
                      <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium text-cyan-400">{log.date}</td>
                        <td className="px-4 py-3 text-sm text-purple-400 font-medium">{log.weight || "-"}</td>
                        <td className="px-4 py-3 text-sm text-zinc-300">{log.steps || "-"}</td>
                        <td className="px-4 py-3 text-sm text-zinc-300">{log.water || "-"}</td>
                        <td className="px-4 py-3 text-sm text-zinc-300">{log.sleep || "-"}</td>
                        <td className="px-4 py-3 text-sm text-zinc-300">{log.completedExercises}/5</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}

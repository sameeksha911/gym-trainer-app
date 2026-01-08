"use client"

import type React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Ruler, Calendar, ImageIcon, Upload } from "lucide-react"
import { useState } from "react"

type MeasurementRecord = {
  date: string
  height: number
  weight: number
  bodyFat: number
  neck: number
  shoulder: number
  arms: number
  chest: number
  upperWaist: number
  lowerWaist: number
  hips: number
  thighs: number
  calf: number
}

type ProgressPhoto = {
  date: string
  front?: string
  side?: string
  back?: string
}

export default function MeasurementsForm() {
  const [frontPhoto, setFrontPhoto] = useState<string>("")
  const [sidePhoto, setSidePhoto] = useState<string>("")
  const [backPhoto, setBackPhoto] = useState<string>("")

  const previousMeasurements: MeasurementRecord[] = [
    {
      date: "Jan 1, 2026",
      height: 175,
      weight: 85,
      bodyFat: 18.5,
      neck: 38,
      shoulder: 112,
      arms: 35,
      chest: 102,
      upperWaist: 88,
      lowerWaist: 92,
      hips: 98,
      thighs: 58,
      calf: 38,
    },
    {
      date: "Dec 1, 2025",
      height: 175,
      weight: 87,
      bodyFat: 19.2,
      neck: 39,
      shoulder: 113,
      arms: 36,
      chest: 104,
      upperWaist: 90,
      lowerWaist: 94,
      hips: 100,
      thighs: 59,
      calf: 39,
    },
    {
      date: "Nov 1, 2025",
      height: 175,
      weight: 89,
      bodyFat: 20.1,
      neck: 40,
      shoulder: 114,
      arms: 36,
      chest: 105,
      upperWaist: 92,
      lowerWaist: 96,
      hips: 102,
      thighs: 60,
      calf: 39,
    },
    {
      date: "Oct 1, 2025",
      height: 175,
      weight: 91,
      bodyFat: 21.0,
      neck: 41,
      shoulder: 115,
      arms: 37,
      chest: 107,
      upperWaist: 94,
      lowerWaist: 98,
      hips: 104,
      thighs: 61,
      calf: 40,
    },
  ]

  const progressPhotos: ProgressPhoto[] = [
    {
      date: "Jan 1, 2026",
      front: "/fit-man-front-view-gym.jpg",
      side: "/fit-man-side-view-gym.jpg",
      back: "/fit-man-back-view-gym.jpg",
    },
    {
      date: "Dec 1, 2025",
      front: "/man-front-view-fitness.jpg",
      side: "/man-side-view-fitness.jpg",
      back: "/man-back-view-fitness.jpg",
    },
    {
      date: "Nov 1, 2025",
      front: "/overweight-man-front-view.jpg",
      side: "/overweight-man-side-view.jpg",
      back: "/overweight-man-back-view.jpg",
    },
  ]

  const measurementFields = [
    { name: "height", label: "Height", unit: "cm" },
    { name: "weight", label: "Weight", unit: "kg" },
    { name: "bodyFat", label: "Body Fat", unit: "%" },
    { name: "neck", label: "Neck", unit: "cm" },
    { name: "shoulder", label: "Shoulder", unit: "cm" },
    { name: "arms", label: "Arms", unit: "cm" },
    { name: "chest", label: "Chest", unit: "cm" },
    { name: "upperWaist", label: "Upper Waist", unit: "cm" },
    { name: "lowerWaist", label: "Lower Waist", unit: "cm" },
    { name: "hips", label: "Hips", unit: "cm" },
    { name: "thighs", label: "Thighs", unit: "cm" },
    { name: "calf", label: "Calf", unit: "cm" },
  ]

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "front" | "side" | "back") => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const result = reader.result as string
        if (type === "front") setFrontPhoto(result)
        else if (type === "side") setSidePhoto(result)
        else if (type === "back") setBackPhoto(result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold tracking-tight text-balance">
              Fit<span className="text-cyan-400">Pro</span>
            </h1>
            <div>
              <h2 className="text-lg font-semibold text-zinc-100">Body Measurements</h2>
              <p className="text-xs text-zinc-500">Track your progress over time</p>
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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Measurement Form */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-0">
            <div className="px-6 py-5 border-b border-zinc-800">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <Ruler className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Add New Measurements</h3>
                  <p className="text-sm text-zinc-500">Record your body measurements for tracking progress</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Date Picker */}
              <div className="space-y-2">
                <Label htmlFor="measurement-date" className="text-sm font-medium text-zinc-300">
                  Measurement Date
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                  <Input
                    id="measurement-date"
                    type="date"
                    defaultValue="2026-01-07"
                    className="bg-zinc-800 border-zinc-700 text-zinc-100 pl-10 focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>
              </div>

              {/* Measurement Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {measurementFields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-sm font-medium text-zinc-300">
                      {field.label}
                      <span className="text-zinc-500 ml-1">({field.unit})</span>
                    </Label>
                    <Input
                      id={field.name}
                      type="number"
                      step="0.1"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-600 focus:border-cyan-500 focus:ring-cyan-500/20"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <ImageIcon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-zinc-100">Progress Photos</h4>
                    <p className="text-sm text-zinc-500">Upload front, side, and back photos for this date</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Front Photo */}
                  <div className="space-y-2">
                    <Label htmlFor="front-photo" className="text-sm font-medium text-zinc-300">
                      Front Photo
                    </Label>
                    <div className="relative">
                      {frontPhoto ? (
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-cyan-500/30">
                          <img
                            src={frontPhoto || "/placeholder.svg"}
                            alt="Front view"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setFrontPhoto("")}
                            className="absolute top-2 right-2 bg-zinc-900/90 text-zinc-100 p-1.5 rounded-md hover:bg-zinc-800 transition-colors"
                          >
                            <span className="sr-only">Remove</span>✕
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="front-photo"
                          className="flex flex-col items-center justify-center aspect-[3/4] rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer"
                        >
                          <Upload className="h-8 w-8 text-zinc-500 mb-2" />
                          <span className="text-sm text-zinc-400">Upload Front</span>
                        </label>
                      )}
                      <Input
                        id="front-photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(e, "front")}
                      />
                    </div>
                  </div>

                  {/* Side Photo */}
                  <div className="space-y-2">
                    <Label htmlFor="side-photo" className="text-sm font-medium text-zinc-300">
                      Side Photo
                    </Label>
                    <div className="relative">
                      {sidePhoto ? (
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-cyan-500/30">
                          <img
                            src={sidePhoto || "/placeholder.svg"}
                            alt="Side view"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setSidePhoto("")}
                            className="absolute top-2 right-2 bg-zinc-900/90 text-zinc-100 p-1.5 rounded-md hover:bg-zinc-800 transition-colors"
                          >
                            <span className="sr-only">Remove</span>✕
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="side-photo"
                          className="flex flex-col items-center justify-center aspect-[3/4] rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer"
                        >
                          <Upload className="h-8 w-8 text-zinc-500 mb-2" />
                          <span className="text-sm text-zinc-400">Upload Side</span>
                        </label>
                      )}
                      <Input
                        id="side-photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(e, "side")}
                      />
                    </div>
                  </div>

                  {/* Back Photo */}
                  <div className="space-y-2">
                    <Label htmlFor="back-photo" className="text-sm font-medium text-zinc-300">
                      Back Photo
                    </Label>
                    <div className="relative">
                      {backPhoto ? (
                        <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-cyan-500/30">
                          <img
                            src={backPhoto || "/placeholder.svg"}
                            alt="Back view"
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setBackPhoto("")}
                            className="absolute top-2 right-2 bg-zinc-900/90 text-zinc-100 p-1.5 rounded-md hover:bg-zinc-800 transition-colors"
                          >
                            <span className="sr-only">Remove</span>✕
                          </button>
                        </div>
                      ) : (
                        <label
                          htmlFor="back-photo"
                          className="flex flex-col items-center justify-center aspect-[3/4] rounded-lg border-2 border-dashed border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-cyan-500/50 transition-all cursor-pointer"
                        >
                          <Upload className="h-8 w-8 text-zinc-500 mb-2" />
                          <span className="text-sm text-zinc-400">Upload Back</span>
                        </label>
                      )}
                      <Input
                        id="back-photo"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(e, "back")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button size="lg" className="w-full bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold">
                  <Ruler className="h-5 w-5 mr-2" />
                  Submit Measurements & Photos
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Previous Measurements Table */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-0">
            <div className="px-6 py-5 border-b border-zinc-800">
              <h3 className="text-lg font-semibold text-zinc-100">Previous Measurements</h3>
              <p className="text-sm text-zinc-500">Last 4 recorded measurements</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-zinc-800/50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Height
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Weight
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Body Fat %
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Neck
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Shoulder
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Arms
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Chest
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Upper Waist
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Lower Waist
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Hips
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Thighs
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      Calf
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {previousMeasurements.map((record, index) => (
                    <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-cyan-400 whitespace-nowrap">{record.date}</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.height} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.weight} kg</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.bodyFat}%</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.neck} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.shoulder} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.arms} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.chest} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.upperWaist} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.lowerWaist} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.hips} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.thighs} cm</td>
                      <td className="px-4 py-3 text-sm text-zinc-300 whitespace-nowrap">{record.calf} cm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-0">
            <div className="px-6 py-5 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <ImageIcon className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100">Progress Photos Gallery</h3>
                  <p className="text-sm text-zinc-500">Visual transformation timeline</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {progressPhotos.map((photoSet, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    <h4 className="text-base font-semibold text-cyan-400">{photoSet.date}</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Front Photo */}
                    {photoSet.front && (
                      <div className="space-y-2">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800">
                          <img
                            src={photoSet.front || "/placeholder.svg"}
                            alt={`Front view - ${photoSet.date}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-zinc-400 text-center">Front View</p>
                      </div>
                    )}
                    {/* Side Photo */}
                    {photoSet.side && (
                      <div className="space-y-2">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800">
                          <img
                            src={photoSet.side || "/placeholder.svg"}
                            alt={`Side view - ${photoSet.date}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-zinc-400 text-center">Side View</p>
                      </div>
                    )}
                    {/* Back Photo */}
                    {photoSet.back && (
                      <div className="space-y-2">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden border border-zinc-700 bg-zinc-800">
                          <img
                            src={photoSet.back || "/placeholder.svg"}
                            alt={`Back view - ${photoSet.date}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-sm text-zinc-400 text-center">Back View</p>
                      </div>
                    )}
                  </div>
                  {index < progressPhotos.length - 1 && <div className="border-t border-zinc-800 mt-6" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

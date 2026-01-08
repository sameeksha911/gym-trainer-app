"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Dumbbell, ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Dumbbell className="h-7 w-7 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Join as Client</h1>
            <p className="text-muted-foreground">Fill out the form below and our trainer will contact you shortly</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Fitness Goal */}
              <div className="space-y-2">
                <label htmlFor="goal" className="text-sm font-medium text-foreground">
                  Fitness Goal
                </label>
                <textarea
                  id="goal"
                  required
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Submit Request
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Request Submitted!</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your request has been sent. The trainer will contact you shortly.
              </p>
              <Link href="/">
                <Button className="mt-4">Return to Home</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

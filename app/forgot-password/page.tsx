"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sending reset email
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="bg-card border border-border rounded-lg p-8 space-y-6">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Forgot Password</h1>
                <p className="text-muted-foreground">Enter your email and we'll send you a reset link</p>
              </div>

              {/* Forgot Password Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              {/* Back to Login Links */}
              <div className="text-center text-sm text-muted-foreground space-y-2">
                <div>
                  Remember your password?{" "}
                  <Link href="/client-login" className="text-primary hover:underline">
                    Client Login
                  </Link>
                </div>
                <div>
                  <Link href="/login/trainer" className="text-primary hover:underline">
                    Trainer Login
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Check Your Email</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We've sent a password reset link to your email. Please check your inbox and follow the instructions.
              </p>
              <Link href="/" className="inline-block mt-4 text-primary hover:underline">
                Return to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

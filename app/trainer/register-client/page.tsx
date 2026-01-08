"use client"

import Link from "next/link"
import { useState } from "react"
export default function RegisterClientPage() {
    const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = new FormData(e.currentTarget)

    try {
     await fetch("/api/register-client", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: form.get("fullName"),
    email: form.get("email"),
    phone: form.get("phone"),
    age: Number(form.get("age")),
    gender: form.get("gender"),
    planType: form.get("planType"),
    feeAmount: Number(form.get("feeAmount")),
    feeDueDate: form.get("feeDueDate"),
    password: form.get("tempPassword")
  })
})


      alert("Client created successfully")
    } catch (err) {
      alert("Failed to create client")
    }

    setLoading(false)
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Register New Client</h1>
        <p className="text-muted-foreground">Create a new client account and set their plan details</p>
      </div>

      {/* Form Card */}
      <div className="bg-card border border-border rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Personal Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground mb-4">Personal Information</h2>

            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter client's full name"
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
                name="email"
                type="email"
                placeholder="client@example.com"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <label htmlFor="age" className="text-sm font-medium text-foreground">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="1"
                max="120"
                placeholder="Enter client's age"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label htmlFor="gender" className="text-sm font-medium text-foreground">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Plan & Payment Section */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Plan & Payment Details</h2>

            {/* Plan Type */}
            <div className="space-y-2">
              <label htmlFor="planType" className="text-sm font-medium text-foreground">
                Plan Type
              </label>
              <select
                id="planType"
                name="planType"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select plan type</option>
                <option value="group">Group</option>
                <option value="personal">Personal</option>
              </select>
            </div>

            {/* Fee Amount */}
            <div className="space-y-2">
              <label htmlFor="feeAmount" className="text-sm font-medium text-foreground">
                Fee Amount (INR)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                <input
                  id="feeAmount"
                  name="feeAmount"
                  type="number"
                  placeholder="0.00"
                  className="w-full pl-8 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            {/* Fee Due Date */}
            <div className="space-y-2">
              <label htmlFor="feeDueDate" className="text-sm font-medium text-foreground">
                Fee Due Date
              </label>
              <input
                id="feeDueDate"
                name="feeDueDate"
                type="date"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Account Security Section */}
          <div className="space-y-4 pt-6 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Account Security</h2>

            {/* Temporary Password */}
            <div className="space-y-2">
              <label htmlFor="tempPassword" className="text-sm font-medium text-foreground">
                Temporary Password
              </label>
              <input
                id="tempPassword"
                name="tempPassword"
                type="text"
                placeholder="Generate a temporary password"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <p className="text-sm text-muted-foreground">Client will be asked to change this on first login</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Create Client Account
            </button>
            <Link
              href="/trainer/clients"
              className="flex-1 bg-secondary text-secondary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

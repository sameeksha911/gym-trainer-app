"use client"

import Link from "next/link"
import { Dumbbell, Users, Apple, MessageCircle, ArrowRight, CheckCircle, Star, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Navigation */}
      <nav className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Sweat<span className="text-cyan-400">Smart</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login/trainer">
                <Button variant="ghost" className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800">
                  Trainer Login
                </Button>
              </Link>
              <Link href="/client-login">
                <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-100 bg-transparent">
                  Client Login
                </Button>
              </Link>
            </div>
            <button
              className="md:hidden p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-zinc-400" /> : <Menu className="h-6 w-6 text-zinc-400" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <Link href="/login/trainer" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                >
                  Trainer Login
                </Button>
              </Link>
              <Link href="/client-login" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full justify-start border-zinc-700 hover:bg-zinc-800 text-zinc-100 bg-transparent"
                >
                  Client Login
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
              <span className="text-sm font-medium text-cyan-400">Premium Fitness Coaching</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
              Transform Your Body, <span className="text-cyan-400">Elevate Your Life</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed text-pretty max-w-2xl mx-auto">
              Personalized training programs, custom meal plans, and expert coaching to help you achieve your fitness
              goals faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-zinc-950 font-semibold text-lg px-8 h-14"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Your Fitness Journey, <span className="text-cyan-400">Simplified</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8 text-pretty">
                SweatSmart is more than just a training platform. We combine cutting-edge technology with personalized
                coaching to deliver results that last. Our expert trainers work with you every step of the way to ensure
                you reach your goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-1">Certified Trainers</h3>
                    <p className="text-zinc-400 text-sm text-pretty">
                      Work with experienced professionals who understand your unique needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-1">Proven Results</h3>
                    <p className="text-zinc-400 text-sm text-pretty">
                      Join hundreds of clients who have transformed their bodies and lives
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-100 mb-1">24/7 Support</h3>
                    <p className="text-zinc-400 text-sm text-pretty">
                      Get guidance whenever you need it with our dedicated support team
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Dumbbell className="h-32 w-32 text-cyan-400/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
              Everything you need to achieve your fitness goals in one comprehensive platform
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all md:col-start-1">
              <div className="h-14 w-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                <Apple className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-100">Meal Plans</h3>
              <p className="text-zinc-400 leading-relaxed text-pretty">
                Custom nutrition plans designed to complement your training and help you achieve optimal results faster.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="h-14 w-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-100">Personal Training</h3>
              <p className="text-zinc-400 leading-relaxed text-pretty">
                Personalized workout programs tailored to your goals, fitness level, and schedule. Train anywhere,
                anytime with professional guidance.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
              <div className="h-14 w-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6">
                <MessageCircle className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-100">1-on-1 Coaching</h3>
              <p className="text-zinc-400 leading-relaxed text-pretty">
                Direct access to your personal trainer for support, motivation, and adjustments to keep you on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Real People, <span className="text-cyan-400">Real Results</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-pretty">
              See how our clients transformed their bodies and lives with SweatSmart
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="grid grid-cols-2 gap-0.5 bg-zinc-800 p-0.5">
                <div className="relative aspect-[3/4] bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/before-transformation-overweight-man.jpg"
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-zinc-950/80 backdrop-blur-sm rounded text-xs font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/after-transformation-fit-muscular-man.jpg"
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-cyan-500/90 backdrop-blur-sm rounded text-xs font-semibold text-zinc-950">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-zinc-300 mb-4 text-pretty leading-relaxed">
                  "Lost 45 lbs in 6 months! The personalized meal plans and consistent coaching kept me motivated every
                  step of the way."
                </p>
                <p className="font-semibold text-zinc-100">Michael Chen</p>
                <p className="text-sm text-zinc-500">6 Month Transformation</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="grid grid-cols-2 gap-0.5 bg-zinc-800 p-0.5">
                <div className="relative aspect-[3/4] bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/before-transformation-woman-unfit.jpg"
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-zinc-950/80 backdrop-blur-sm rounded text-xs font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/after-transformation-fit-athletic-woman.jpg"
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-cyan-500/90 backdrop-blur-sm rounded text-xs font-semibold text-zinc-950">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-zinc-300 mb-4 text-pretty leading-relaxed">
                  "Never thought I could build this much strength. My trainer pushed me beyond what I thought was
                  possible. Feeling confident and strong!"
                </p>
                <p className="font-semibold text-zinc-100">Sarah Johnson</p>
                <p className="text-sm text-zinc-500">4 Month Transformation</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="grid grid-cols-2 gap-0.5 bg-zinc-800 p-0.5">
                <div className="relative aspect-[3/4] bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/before-transformation-skinny-man.jpg"
                      alt="Before transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-zinc-950/80 backdrop-blur-sm rounded text-xs font-semibold">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] bg-zinc-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/after-transformation-muscular-athletic-man.jpg"
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-1 bg-cyan-500/90 backdrop-blur-sm rounded text-xs font-semibold text-zinc-950">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-zinc-300 mb-4 text-pretty leading-relaxed">
                  "Gained 20 lbs of lean muscle. The structured program and nutrition guidance were exactly what I
                  needed to break through my plateau."
                </p>
                <p className="font-semibold text-zinc-100">David Rodriguez</p>
                <p className="text-sm text-zinc-500">8 Month Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to <span className="text-cyan-400">Start Your Journey?</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-10 text-pretty max-w-2xl mx-auto">
            Join SweatSmart today and take the first step toward becoming the best version of yourself. Your
            transformation starts now.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-cyan-400" />
              </div>
              <span className="text-xl font-bold">
                Sweat<span className="text-cyan-400">Smart</span>
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-zinc-500 text-sm">© 2026 SweatSmart. All rights reserved.</p>
              <div className="flex flex-col items-center gap-1 text-zinc-500 text-sm">
                <p>Phone: 1234056789</p>
                <p>Email: wery@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/login/trainer" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                Trainer Portal
              </Link>
              <Link href="/client-login" className="text-zinc-400 hover:text-zinc-100 text-sm transition-colors">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

export function setAuth(role: "trainer" | "client") {
  localStorage.setItem("role", role)
}

export function getAuth() {
  if (typeof window === "undefined") return null
  return localStorage.getItem("role")
}

export function clearAuth() {
  localStorage.removeItem("role")
}

export function isAuthenticated() {
  return !!getAuth()
}

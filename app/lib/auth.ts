"use client"

import { account } from "./appwrite-client"

export type UserRole = "trainer" | "client" | null

export async function login(email: string, password: string) {
  await account.createEmailPasswordSession(email, password)
  return true
}

export async function logout() {
  await account.deleteSession("current")
}

export async function getCurrentUser() {
  try {
    return await account.get()
  } catch {
    return null
  }
}

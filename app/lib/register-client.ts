"use server"

import { databases, users } from "./appwrite-server"
import { ID } from "node-appwrite"

const DATABASE_ID = "fitness"
const USERS_TABLE = "users"

export async function registerClient(data: {
  name: string
  email: string
  password: string
  phone?: string
  trainerId: string
}) {
  // 1. Create Appwrite Auth User
  const user = await users.create(
    ID.unique(),
    data.email,
    data.phone || undefined,
    data.password,
    data.name
  )

  // 2. Store in users table
  await databases.createRow(
    DATABASE_ID,
    USERS_TABLE,
    ID.unique(),
    {
      userId: user.$id,
      name: data.name,
      email: data.email,
      phone: data.phone || "",
      role: "client",
      trainerId: data.trainerId
    }
  )

  return { success: true }
}

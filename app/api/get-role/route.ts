import { Client, Databases } from "appwrite"
import { NextResponse } from "next/server"

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("695f4b120013098c82e5")
  .setKey(process.env.APPWRITE_API_KEY!)

const databases = new Databases(client)

export async function GET(req: Request) {
  try {
    const userId = req.headers.get("x-user-id")

    if (!userId) {
      return NextResponse.json({ error: "No user" }, { status: 401 })
    }

    const result = await databases.listRows("fitness", "users", [
      `equal("userId","${userId}")`
    ])

    return NextResponse.json({ role: result.rows[0].role })
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

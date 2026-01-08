import { NextResponse } from "next/server"
import { registerClient } from "@/app/lib/register-client"

export async function POST(req: Request) {
  const body = await req.json()

  try {
    await registerClient(body)
    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

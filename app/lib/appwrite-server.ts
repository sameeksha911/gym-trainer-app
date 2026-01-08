import { Client, Databases, Users } from "node-appwrite"

const client = new Client()

client.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
client.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
client.setKey(process.env.APPWRITE_API_KEY!)

export const databases = new Databases(client)
export const users = new Users(client)

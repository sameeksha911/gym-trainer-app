import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("695f4b120013098c82e5");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

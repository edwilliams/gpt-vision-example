"use server"

import { generateRandomString } from "@/lib/utils"
import { revalidateTag } from "next/cache"

export async function createChat() {
  const id = generateRandomString(16)

  revalidateTag("get-chats-for-chat-list")

  return {
    id,
  }
}

export type CreateChat = typeof createChat

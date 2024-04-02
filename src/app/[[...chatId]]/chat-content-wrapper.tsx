import ChatContent from "./chat-content"
import { createChat } from "./actions"

export default async function ChatContentWrapper() {
  return <ChatContent createChat={createChat} />
}

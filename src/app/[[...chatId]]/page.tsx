import ChatContent from "./chat-content"
import { createChat } from "./actions"

export default function Page() {
  return (
    <div className="w-full h-full flex">
      <ChatContent createChat={createChat} />
    </div>
  )
}

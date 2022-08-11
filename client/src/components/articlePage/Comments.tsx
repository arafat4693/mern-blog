import { MongoMessage } from "../../utils/types"
import Comment from "./Comment"

interface Props {
  messages: MongoMessage[]
}

export default function Comments({ messages }: Props) {
  return (
    <div>
      {messages.map((m) => (
        <Comment key={m._id} comment={m} />
      ))}
    </div>
  )
}

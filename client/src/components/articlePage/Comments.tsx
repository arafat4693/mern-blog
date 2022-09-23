import { MongoArticle, MongoMessage } from "../../utils/types"
import Comment from "./Comment"

interface Props {
  messages: MongoMessage[]
  replies: any
  indentation?: boolean
  showReplies?: boolean
  article: MongoArticle
}

export default function Comments({
  messages,
  indentation,
  replies,
  article,
  showReplies = true,
}: Props) {
  return (
    <div
      className={`${
        indentation &&
        "sm:ml-12 ml-6 relative before:content-[''] before:absolute before:top-0 before:-left-4 before:min-h-full before:w-1.5 before:bg-gray-200 before:rounded-lg"
      } ${showReplies ? "block" : "hidden"}`}
    >
      {messages.map((m) => (
        <Comment key={m._id} comment={m} replies={replies} article={article} />
      ))}
    </div>
  )
}

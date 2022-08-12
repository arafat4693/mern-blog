import { useMemo } from "react"
import { useSelector } from "react-redux"
import { createMessage } from "../../redux/messageSlice"
import { RootState } from "../../redux/store"
import ErrMsg from "../layouts/ErrMsg"
import CommentForm from "./CommentForm"
import Comments from "./Comments"

interface Props {
  articleId: string | undefined
}

export default function CommentBox({ articleId }: Props) {
  const { user } = useSelector((state: RootState) => state.user)
  const { messages } = useSelector((state: RootState) => state.message)

  const commentsByParentId = useMemo(() => {
    const group: any = { root: [] }
    messages.forEach((m) => {
      if (articleId === m.articleId) {
        if (m.parentId) {
          if (!group[m.parentId]) group[m.parentId] = []
          group[m.parentId] = [...group[m.parentId], m]
        } else {
          group["root"] = [...group["root"], m]
        }
      }
    })
    return group
  }, [messages, articleId])

  const getReplies = () => {
    const { root, ...replies } = commentsByParentId
    return replies
  }

  return (
    <div className="py-20">
      <button className="bg-violet-700 mb-20 shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl capitalize font-medium rounded-full py-4 px-8 block mx-auto">
        show comments
      </button>
      {commentsByParentId.root.length === 0 && (
        <h1 className="text-gray-800 capitalize font-semibold text-3xl">
          no comment! be the first one
        </h1>
      )}
      {user ? (
        <CommentForm user={user} actionType="ROOT" actionFn={createMessage} />
      ) : (
        <h1 className="bg-violet-700 mt-8 text-white text-4xl capitalize font-semibold text-center py-16">
          Login to comment
        </h1>
      )}
      {commentsByParentId.root.length ? (
        <Comments messages={commentsByParentId.root} replies={getReplies()} />
      ) : (
        <ErrMsg msg="no comments yet" />
      )}
    </div>
  )
}

import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createMessage, getMessages } from "../../redux/messageSlice"
import { AppDispatch, RootState } from "../../redux/store"
import { MongoArticle } from "../../utils/types"
import ErrMsg from "../layouts/ErrMsg"
import CommentForm from "./CommentForm"
import Comments from "./Comments"

interface Props {
  article: MongoArticle
}

export default function CommentBox({ article }: Props) {
  const { user } = useSelector((state: RootState) => state.user)
  const { messages } = useSelector((state: RootState) => state.message)
  const [showComments, setShowComments] = useState<boolean>(true)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getMessages(article._id))
  }, [dispatch, article._id])

  const commentsByParentId = useMemo(() => {
    const group: any = { root: [] }
    messages.forEach((m) => {
      if (article._id === m.articleId) {
        if (m.parentId) {
          if (!group[m.parentId]) group[m.parentId] = []
          group[m.parentId] = [...group[m.parentId], m]
        } else {
          group["root"] = [...group["root"], m]
        }
      }
    })
    return group
  }, [messages, article._id])

  const getReplies = () => {
    const { root, ...replies } = commentsByParentId
    return replies
  }

  return (
    <div className="py-20">
      <button
        onClick={() => setShowComments((prev) => !prev)}
        className="bg-violet-700 shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl capitalize font-medium rounded-full py-4 px-8 block mx-auto"
      >
        {showComments ? "show comments" : "hide comments"}
      </button>

      <div className={`${showComments ? "hidden" : "block"} mt-20`}>
        {commentsByParentId.root.length === 0 && (
          <h1 className="text-gray-800 capitalize font-semibold text-3xl">
            no comment! be the first one
          </h1>
        )}
        {user ? (
          <CommentForm user={user} actionType="ROOT" actionFn={createMessage} />
        ) : (
          <h1 className="bg-violet-700 mt-8 text-white text-3xl sm:text-4xl capitalize font-semibold text-center py-16">
            Login to comment
          </h1>
        )}
        {commentsByParentId.root.length ? (
          <Comments
            messages={commentsByParentId.root}
            replies={getReplies()}
            article={article}
          />
        ) : (
          <ErrMsg msg="no comments yet" />
        )}
      </div>
    </div>
  )
}

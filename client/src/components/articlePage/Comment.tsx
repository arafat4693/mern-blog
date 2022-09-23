import { useEffect, useState } from "react"
import { BsReplyFill } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"
import { MdDelete, MdEdit } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import {
  removeMessage,
  replyMessage,
  resetCurrentMessage,
  resetState,
} from "../../redux/messageSlice"
import { AppDispatch, RootState } from "../../redux/store"
import { MongoArticle, MongoMessage } from "../../utils/types"
import CommentForm from "./CommentForm"
import Comments from "./Comments"
import EditComment from "./EditComment"
import moment from "moment"
import { formateImg } from "../../utils/utilFunctions"

interface Props {
  comment: MongoMessage
  article: MongoArticle
  replies: any
}

export default function Comment({ comment, replies, article }: Props) {
  const { user, users } = useSelector((state: RootState) => state.user)
  const commentUser = users.find((u) => u._id === comment.senderId)
  const msgArr = comment.message.split(" ")
  const [edit, setEdit] = useState<boolean>(false)
  const [reply, setReply] = useState<boolean>(false)
  const [showReplies, setShowReplies] = useState<boolean>(false)
  const [message, setMessage] = useState<string>(comment.message)
  const dispatch = useDispatch<AppDispatch>()
  const {
    messageLoading,
    messageAction,
    messageSuccess,
    messageError,
    messageMsg,
    currentMessageId,
  } = useSelector((state: RootState) => state.message)

  const tagName = `@${commentUser?.displayName
    .toLowerCase()
    .replace(/\s+/g, "")} `

  useEffect(() => {
    if (messageAction === "EDIT" || messageAction === "DELETE") {
      if (messageSuccess) {
        dispatch(resetState())
        if (messageAction === "EDIT") {
          setEdit(false)
        }
      }
      if (messageError) {
        dispatch(resetState())
        toast(messageMsg, { type: "error", autoClose: 2300 })
      }
    }
  }, [messageAction, messageSuccess, messageError, messageMsg, dispatch])

  useEffect(() => {
    if (
      messageAction === "REPLY" &&
      messageSuccess &&
      currentMessageId === comment._id
    ) {
      setReply(false)
      setShowReplies(true)
      dispatch(resetCurrentMessage())
    }
  }, [messageAction, messageSuccess, currentMessageId, comment._id, dispatch])

  function deleteComment(): void {
    const confirm = window.confirm(
      "Are you sure you want to delete the message?"
    )
    if (!confirm) return
    dispatch(removeMessage(comment._id))
  }

  return (
    <>
      <div className="mt-6 py-8 px-12 rounded-xl bg-[#f3f3f3]">
        <div className="flex items-center justify-between flex-wrap sm:gap-0 gap-4">
          <div className="flex items-center gap-4">
            <img
              src={formateImg(commentUser?.imgUrl)}
              alt="user"
              className="w-16 min-w-[4rem] h-16 object-cover rounded-full"
            />
            <h3 className="text-2xl text-gray-800 font-semibold hidden sm:block">
              {commentUser?.displayName}
            </h3>
            {user?._id === comment.senderId && (
              <span className="bg-violet-700 px-4 py-1 rounded-lg text-white text-xl font-medium">
                you
              </span>
            )}
            <p className="text-xl text-gray-400">
              {moment(comment.createdAt).fromNow()}
            </p>
          </div>
          <div className="buttons flex items-center gap-5">
            {replies[comment._id] && (
              <button
                onClick={() => setShowReplies((prev) => !prev)}
                className="text-gray-500 text-xl bg-gray-200 rounded-full px-5 py-1.5 tracking-wide"
              >
                {showReplies ? "hide replies" : "show replies"}
              </button>
            )}
            {user &&
              (user._id === comment.senderId ||
                article.writerId === user._id) && (
                <button
                  onClick={deleteComment}
                  className={`${
                    (messageAction === "DELETE" || messageAction === "EDIT") &&
                    messageLoading
                      ? "text-red-400 pointer-events-none"
                      : "text-red-600 hover:text-red-400"
                  } flex items-center gap-1.5 text-2xl font-semibold transition-all`}
                >
                  <MdDelete />
                  <span className="hidden sm:block">Delete</span>
                </button>
              )}
            {user && user._id === comment.senderId ? (
              <button
                onClick={() => setEdit(true)}
                className="flex items-center gap-1.5 text-2xl font-semibold text-violet-700 hover:text-violet-400 transition-all"
              >
                <MdEdit />
                <span className="hidden sm:block">Edit</span>
              </button>
            ) : user && user._id !== comment.senderId ? (
              reply ? (
                <button
                  onClick={() => setReply(false)}
                  className="flex items-center gap-1.5 text-2xl font-semibold text-red-600 hover:text-red-400 transition-all"
                >
                  <IoMdClose />
                  <span className="hidden sm:block">Cancel</span>
                </button>
              ) : (
                <button
                  onClick={() => setReply(true)}
                  className="flex items-center gap-1.5 text-2xl font-semibold text-violet-700 hover:text-violet-400 transition-all"
                >
                  <BsReplyFill />
                  <span className="hidden sm:block">Reply</span>
                </button>
              )
            ) : null}
          </div>
        </div>
        {edit ? (
          <EditComment
            edit={edit}
            setEdit={setEdit}
            message={message}
            setMessage={setMessage}
            comment={comment}
            messageLoading={messageLoading}
            messageAction={messageAction}
            initialValue={comment.parentId ? `${msgArr[0]} ` : ""}
          />
        ) : (
          <div className="text-2xl text-gray-500 font-medium mt-6">
            {comment.parentId ? (
              <>
                <span className="text-violet-700">{msgArr[0]}</span>{" "}
                {msgArr.slice(1).join(" ")}
              </>
            ) : (
              comment.message
            )}
          </div>
        )}
      </div>
      {reply && (
        <CommentForm
          user={user}
          actionType="REPLY"
          actionFn={replyMessage}
          parentId={comment._id}
          initialValue={tagName}
        />
      )}
      {replies[comment._id] && (
        <Comments
          messages={replies[comment._id]}
          indentation
          replies={replies}
          showReplies={showReplies}
          article={article}
        />
      )}
    </>
  )
}

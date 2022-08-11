import { useEffect, useState } from "react"
import { BsReplyFill } from "react-icons/bs"
import { MdDelete, MdEdit } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { removeMessage, resetState } from "../../redux/messageSlice"
import { AppDispatch, RootState } from "../../redux/store"
import { MongoMessage } from "../../utils/types"
import EditComment from "./EditComment"

interface Props {
  comment: MongoMessage
}

export default function Comment({ comment }: Props) {
  const { user } = useSelector((state: RootState) => state.user)
  const [edit, setEdit] = useState<boolean>(false)
  const [message, setMessage] = useState<string>(comment.message)
  const dispatch = useDispatch<AppDispatch>()
  const {
    messageLoading,
    messageAction,
    messageSuccess,
    messageError,
    messageMsg,
  } = useSelector((state: RootState) => state.message)

  useEffect(() => {
    if (messageAction && messageAction !== "ROOT") {
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

  function deleteComment() {
    const confirm = window.confirm(
      "Are you sure you want to delete the message?"
    )
    if (!confirm) return
    dispatch(removeMessage(comment._id))
  }

  return (
    <div className="mt-8 py-8 px-12 rounded-xl bg-[#f3f3f3]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/user.jpg"
            alt="user"
            className="w-16 min-w-[4rem] h-16 object-cover rounded-full"
          />
          <h3 className="text-2xl text-gray-800 font-semibold">Sunny Islam</h3>
          {user?._id === comment.senderId && (
            <span className="bg-violet-700 px-4 py-1 rounded-lg text-white text-xl font-medium">
              you
            </span>
          )}
          <p className="text-xl text-gray-400">1 month ago</p>
        </div>
        <div className="buttons flex items-center gap-5">
          {user && user._id === comment.senderId ? (
            <>
              <button
                onClick={deleteComment}
                className={`${
                  messageAction === "DELETE" && messageLoading
                    ? "text-red-400 pointer-events-none"
                    : "text-red-600 hover:text-red-400"
                } flex items-center gap-1.5 text-2xl font-semibold transition-all`}
              >
                <MdDelete />
                Delete
              </button>

              <button
                onClick={() => setEdit(true)}
                className="flex items-center gap-1.5 text-2xl font-semibold text-violet-700 hover:text-violet-400 transition-all"
              >
                <MdEdit />
                Edit
              </button>
            </>
          ) : user && user._id !== comment.senderId ? (
            <button className="flex items-center gap-1.5 text-2xl font-semibold text-violet-700 hover:text-violet-400 transition-all">
              <BsReplyFill />
              Reply
            </button>
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
        />
      ) : (
        <div className="text-2xl text-gray-500 font-medium mt-6">
          {comment.message}
        </div>
      )}
    </div>
  )
}

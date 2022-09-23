import { Dispatch } from "react"
import { useDispatch } from "react-redux"
import { editMessage } from "../../redux/messageSlice"
import { AppDispatch } from "../../redux/store"
import { MongoMessage } from "../../utils/types"
import { formatComment } from "../../utils/utilFunctions"

interface Props {
  setMessage: Dispatch<string>
  setEdit: Dispatch<boolean>
  edit: boolean
  message: string
  comment: MongoMessage
  messageAction: "ROOT" | "DELETE" | "EDIT" | "REPLY" | ""
  messageLoading: boolean
  initialValue: string
}

export default function EditComment({
  setMessage,
  setEdit,
  edit,
  message,
  comment,
  messageLoading,
  messageAction,
  initialValue,
}: Props) {
  const dispatch = useDispatch<AppDispatch>()

  function updateComment(e: any) {
    e.preventDefault()
    const messageData = {
      messageId: comment._id,
      message: formatComment(message, initialValue),
    }
    dispatch(editMessage(messageData))
  }

  return (
    <form className={`${edit ? "block" : "hidden"} mt-6`}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Update your comment"
        className="w-full resize-none h-40 bg-white px-6 py-4 rounded-lg text-2xl text-gray-500 border border-gray-300 border-solid focus:border-gray-800 transition-all duration-200"
      ></textarea>

      <div className="flex gap-2 sm:gap-4 justify-end flex-col sm:flex-row">
        <input
          onClick={updateComment}
          type="submit"
          value="update"
          className={`${
            messageAction === "EDIT" && messageLoading
              ? "bg-violet-400 pointer-events-none"
              : "bg-violet-700 hover:bg-gray-700"
          } text-white transition-all duration-300 mt-4 cursor-pointer rounded-lg py-4 px-12 text-2xl capitalize font-semibold`}
        />
        <button
          type="button"
          onClick={() => setEdit(false)}
          className={`${
            messageAction === "EDIT" && messageLoading
              ? "bg-red-400 pointer-events-none"
              : "bg-red-600 hover:bg-gray-700"
          } text-white transition-all duration-300 mt-4 cursor-pointer rounded-lg py-4 px-12 text-2xl capitalize font-semibold`}
        >
          cancel
        </button>
      </div>
    </form>
  )
}

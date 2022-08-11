import { Dispatch } from "react"
import { useDispatch } from "react-redux"
import { editMessage } from "../../redux/messageSlice"
import { AppDispatch } from "../../redux/store"
import { MongoMessage } from "../../utils/types"

interface Props {
  setMessage: Dispatch<string>
  setEdit: Dispatch<boolean>
  edit: boolean
  message: string
  comment: MongoMessage
}

export default function EditComment({
  setMessage,
  setEdit,
  edit,
  message,
  comment,
}: Props) {
  const dispatch = useDispatch<AppDispatch>()

  function updateComment(e: any) {
    e.preventDefault()
    const messageData = {
      messageId: comment._id,
      message,
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

      <div className="flex gap-4 justify-end">
        <input
          onClick={updateComment}
          type="submit"
          value="update"
          className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-4 cursor-pointer rounded-lg py-4 px-12 text-2xl capitalize font-semibold"
        />
        <button
          type="button"
          onClick={() => setEdit(false)}
          className="text-white bg-red-600 hover:bg-gray-700 transition-all duration-300 mt-4 cursor-pointer rounded-lg py-4 px-12 text-2xl capitalize font-semibold"
        >
          cancel
        </button>
      </div>
    </form>
  )
}
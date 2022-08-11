import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import CommentForm from "./CommentForm"
import Comments from "./Comments"

export default function CommentBox() {
  const { user } = useSelector((state: RootState) => state.user)
  const { messages } = useSelector((state: RootState) => state.message)

  return (
    <div className="py-20">
      <button className="bg-violet-700 mb-20 shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl capitalize font-medium rounded-full py-4 px-8 block mx-auto">
        show comments
      </button>
      {messages.length === 0 && (
        <h1 className="text-gray-800 capitalize font-semibold text-3xl">
          no comment! be the first one
        </h1>
      )}
      {user ? (
        <CommentForm user={user} />
      ) : (
        <h1 className="bg-violet-700 mt-8 text-white text-4xl capitalize font-semibold text-center py-16">
          Login to comment
        </h1>
      )}
      {messages.length ? (
        <Comments messages={messages} />
      ) : (
        <h3 className="w-[45rem] mx-auto py-5 rounded-xl text-center bg-violet-200/60 text-gray-800 text-2xl font-medium mt-6">
          No comments yet
        </h3>
      )}
    </div>
  )
}

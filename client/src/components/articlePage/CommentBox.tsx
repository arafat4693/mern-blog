import CommentForm from "./CommentForm"
import Comments from "./Comments"

export default function CommentBox() {
  return (
    <div className="py-20">
      <button className="bg-violet-700 shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl capitalize font-medium rounded-full py-4 px-8 block mx-auto">
        show comments
      </button>
      <h1 className="text-gray-800 mt-20 mb-8 capitalize font-semibold text-3xl">
        no comment! be the first one
      </h1>
      <CommentForm />
      <Comments />
    </div>
  )
}

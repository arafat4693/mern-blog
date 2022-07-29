import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Comment() {
  return (
    <article className="flex gap-8 border border-solid border-gray-400 rounded-3xl p-6">
      <img
        src="/images/user.jpg"
        alt="user"
        className="w-24 min-w-[6rem] h-24 rounded-full object-cover"
      />
      <div className="flex grow justify-between">
        <div className="content">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-medium text-gray-700 capitalize">
              Alice
            </h2>
            <span className="text-2xl text-gray-400">|</span>
            <span className="text-lg text-gray-400 font-medium">
              November 21, 2021 at 12:39 pm
            </span>
          </div>
          <p className="text-xl text-gray-600 mt-4">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet elit. Ex
            tempore reprehenderit, vel fugit adipisci doloribus iure atque et
            veritatis nisi fugiat voluptatum officia mollitia.
          </p>
          <Link
            to="/"
            className="text-gray-500 text-xl bg-gray-200 rounded-full px-5 py-1.5 tracking-wide inline-block mt-4"
          >
            Article
          </Link>
        </div>

        <div className="icons flex gap-3">
          <button
            title="Accept"
            className="w-9 h-9 rounded-full border border-green-500 border-solid flex items-center justify-center text-green-500 text-2xl hover:text-white hover:bg-green-500 transition-all duration-300"
          >
            <AiOutlineCheck />
          </button>

          <button
            title="Reject"
            className="w-9 h-9 rounded-full border border-red-500 border-solid flex items-center justify-center text-red-500 text-2xl hover:text-white hover:bg-red-500 transition-all duration-300"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </article>
  )
}

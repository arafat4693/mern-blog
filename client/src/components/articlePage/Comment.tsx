import { BsReplyFill } from "react-icons/bs"
import { MdDelete, MdEdit } from "react-icons/md"

export default function Comment() {
  return (
    <div className="mt-8 py-8 px-12 rounded-xl bg-[#f6f6f6]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/user.jpg"
            alt="user"
            className="w-16 min-w-[4rem] h-16 object-cover rounded-full"
          />
          <h3 className="text-2xl text-gray-800 font-semibold">Sunny Islam</h3>
          <span className="bg-violet-700 px-4 py-1 rounded-lg text-white text-xl font-medium">
            you
          </span>
          <p className="text-xl text-gray-400">1 month ago</p>
        </div>
        <div className="buttons flex items-center gap-5">
          <button className="flex items-center gap-1.5 text-2xl font-semibold text-red-600 hover:text-red-400 transition-all">
            <MdDelete />
            Delete
          </button>

          <button className="flex items-center gap-1.5 text-2xl font-semibold text-violet-700 hover:text-violet-400 transition-all">
            <MdEdit />
            Edit
          </button>

          <button className="flex items-center gap-1.5 text-2xl font-semibold text-violet-700 hover:text-violet-400 transition-all">
            <BsReplyFill />
            Reply
          </button>
        </div>
      </div>

      <div className="text-2xl text-gray-500 font-medium mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
        doloremque deleniti dolor earum dolorem neque perspiciatis officiis
        exercitationem nulla vitae! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Iste doloremque deleniti dolor earum dolorem neque
        perspiciatis officiis exercitationem nulla vitae! Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Iste doloremque deleniti dolor earum
        dolorem neque perspiciatis officiis exercitationem nulla vitae!
      </div>
    </div>
  )
}

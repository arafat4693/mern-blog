import { CalendarIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi"
import { AiOutlineDoubleRight } from "react-icons/ai"

export default function Post() {
  return (
    <div className="flex items-center gap-8 mb-8">
      <img
        src="/images/poster.jpg"
        alt="poster"
        className="min-w-[30rem] w-[30rem] h-[30rem] object-cover rounded-3xl"
      />

      <div className="content">
        <Link
          to="/"
          className="bg-size text-gray-800 text-4xl font-medium capitalize leading-snug hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          It Really Have Good Feeling When You Enjoy Nature
        </Link>

        <div className="flex gap-6 items-center my-6">
          <p className="flex gap-2 items-center text-2xl text-gray-600">
            <FiUser />
            Alice
          </p>
          <p className="flex gap-2 items-center text-2xl text-gray-600">
            <CalendarIcon className="w-6 h-6 stroke-gray-600" />
            November 18, 2021
          </p>
        </div>

        <p className="text-2xl text-gray-600 font-medium">
          Far far away, behind the word mountains, far from the...
        </p>

        <Link
          to="/"
          className="relative group capitalize text-gray-800 font-medium text-2xl mt-10 inline-flex items-center gap-5 after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[0.20rem] after:bg-gray-800 after:left-0 after:bottom-0 after:transition-all after:duration-1000 after:ease-in-out"
        >
          read more{" "}
          <AiOutlineDoubleRight className="group-hover:ml-3 ml-0 transition-all duration-1000 ease-in-out" />
        </Link>
      </div>
    </div>
  )
}

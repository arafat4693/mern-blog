import { Link } from "react-router-dom"
import { FaRegComment, FaRegHeart } from "react-icons/fa"

export default function SrcResult() {
  return (
    <div className="mb-24">
      <Link
        to="/"
        className="w-full h-[48rem] overflow-hidden rounded-3xl inline-block relative shadow-xl shadow-gray-300"
      >
        <img
          src="/images/poster.jpg"
          alt="poster"
          className="w-full h-full object-cover hover:scale-105 scale-100 transition-all duration-700 ease-in-out"
        />

        <div className="bg-violet-700 top-6 right-6 absolute flex gap-4 items-center py-2.5 px-4 rounded-full cursor-auto">
          <span className="text-2xl text-white text-medium flex items-center gap-2">
            <FaRegComment /> 30
          </span>

          <span className="text-2xl text-white text-medium flex items-center gap-2">
            <FaRegHeart /> 150
          </span>
        </div>
      </Link>

      <p className="text-2xl text-gray-500 capitalize text-center space-x-6 my-6">
        <Link
          to="/"
          className="hover:text-gray-800 transition-all duration-500"
        >
          entertainment
        </Link>
        <Link
          to="/"
          className="hover:text-gray-800 transition-all duration-500"
        >
          life style
        </Link>
      </p>

      <div className="text-center">
        <Link
          to="/"
          className="bg-size text-gray-700 text-[2.5rem] leading-none font-medium capitalize hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          It Really Have Good Feeling When You Enjoy Nature
        </Link>
      </div>

      <div className="flex items-center gap-6 justify-center my-8">
        <img
          src="/images/user.jpg"
          alt="user"
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="flex gap-2 items-center text-2xl text-gray-600">
          By Alice <span className="text-3xl font-bold mx-2">.</span> November
          18, 2021
        </p>
      </div>

      <p className="text-2xl text-gray-500 leading-normal text-center">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in...
      </p>

      <Link
        to="/"
        className="capitalize mx-auto mt-8 w-48 h-14 flex items-center justify-center rounded-full bg-violet-700 shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl font-medium"
      >
        read more
      </Link>
    </div>
  )
}

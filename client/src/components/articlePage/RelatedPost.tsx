import { Link } from "react-router-dom"

export default function RelatedPost() {
  return (
    <div>
      <Link
        to="/"
        className="block mb-8 w-[29rem] h-[29rem] rounded-xl overflow-hidden"
      >
        <img
          src="/images/poster.jpg"
          alt="poster"
          className="w-full h-full scale-100 hover:scale-110 transition-all duration-300 object-cover"
        />
      </Link>
      <Link
        to="/"
        className="text-3xl text-gray-800 font-semibold bg-size hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
      >
        10 Ways To Stick To Your Exercise Routine On Vacation
      </Link>
      <p className="flex mt-4 gap-3 items-end text-2xl text-gray-600">
        Alice <span className="text-3xl font-bold">.</span> November 18, 2021
      </p>
    </div>
  )
}

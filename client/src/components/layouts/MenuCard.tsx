import { CalendarIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"

interface Props {
  last?: boolean
}

export default function MenuCard({ last }: Props) {
  return (
    <div className={`flex gap-6 items-center ${last ? "mb-0" : "mb-9"}`}>
      <img
        src="/images/poster.jpg"
        alt="poster"
        className="min-w-[8rem] w-32 h-32 object-cover rounded-lg"
      />
      <div className="content">
        <Link
          to="/"
          className="bg-size text-gray-700 text-3xl font-medium capitalize leading-snug hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          It Really Have Good Feeling When You Enjoy Nature
        </Link>
        <p className="flex gap-2 items-center text-2xl text-gray-500 mt-4">
          <CalendarIcon className="w-6 h-6 stroke-gray-500" />
          November 18, 2021
        </p>
      </div>
    </div>
  )
}

import { CalendarIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { MongoArticle } from "../../utils/types"
import { Dispatch } from "react"
import { formatDate } from "../../utils/utilFunctions"

interface Props {
  last?: boolean
  article: MongoArticle
  setCloseMenu?: Dispatch<boolean>
}

export default function MenuCard({ last, article, setCloseMenu }: Props) {
  function closeMenu() {
    if (!setCloseMenu) return
    setCloseMenu(true)
  }

  return (
    <div className={`flex gap-6 items-center ${last ? "mb-0" : "mb-9"}`}>
      <Link
        to={`/article/${article.slug}`}
        className="min-w-[8rem] w-32 h-32 overflow-hidden rounded-lg"
        onClick={closeMenu}
      >
        <img
          src={article.thumbnailImg}
          alt="poster"
          className="w-full h-full object-cover hover:scale-110 scale-100 transition-all duration-700 ease-in-out"
        />
      </Link>

      <div className="content">
        <Link
          to={`/article/${article.slug}`}
          onClick={closeMenu}
          className="bg-size text-gray-700 text-2xl font-medium capitalize leading-snug hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          {article.title}
        </Link>
        <p className="hidden sm:flex gap-2 items-center text-xl text-gray-500 mt-4">
          <CalendarIcon className="w-6 h-6 stroke-gray-500" />
          {formatDate(article.createdAt)}
        </p>
      </div>
    </div>
  )
}

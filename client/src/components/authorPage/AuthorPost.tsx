import { FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"
import { MongoArticle } from "../../utils/types"

interface Props {
  article: MongoArticle
  authorName: string
}

export default function AuthorPost({ article, authorName }: Props) {
  return (
    <div
      className={`flex gap-6 items-center p-3.5 border border-gray-300 border-solid rounded-xl mt-6`}
    >
      <Link
        to={`/article/${article.slug}`}
        className="min-w-[10rem] w-40 h-40 overflow-hidden rounded-lg shadow-lg"
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
          className="bg-size text-gray-800 text-[1.6rem] font-semibold capitalize leading-snug hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          {article.title}
        </Link>
        <p className="flex gap-2 items-center text-2xl text-gray-500 mt-4">
          <FiUser className="w-6 h-6 stroke-gray-500" />
          {authorName}
        </p>
      </div>
    </div>
  )
}

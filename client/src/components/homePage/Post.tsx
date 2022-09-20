import { CalendarIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { MongoArticle } from "../../utils/types"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { formatDate } from "../../utils/utilFunctions"

interface Props {
  article: MongoArticle
}

export default function Post({ article }: Props) {
  const author = useSelector((state: RootState) =>
    state.user.users.find((u) => u._id === article.writerId)
  )

  return (
    <div className="flex items-center gap-8 mb-8 flex-col justify-center sm:flex-row sm:justify-start">
      <Link
        to={`/article/${article.slug}`}
        className="min-w-[30rem] w-[30rem] h-[30rem] overflow-hidden rounded-3xl"
      >
        <img
          src={article.thumbnailImg}
          alt="poster"
          className="w-full h-full object-cover hover:scale-110 scale-100 transition-all duration-500 ease-in-out"
        />
      </Link>

      <div className="content sm:block hidden">
        <Link
          to={`/article/${article.slug}`}
          className="bg-size text-gray-800 text-4xl font-medium capitalize leading-snug hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          {article.title}
        </Link>

        <div className="flex gap-6 items-center my-6">
          <p className="flex gap-2 items-center text-2xl text-gray-600">
            <FiUser />
            {author?.displayName}
          </p>
          <p className="sm:flex gap-2 items-center text-2xl text-gray-600 hidden">
            <CalendarIcon className="w-6 h-6 stroke-gray-600" />
            {formatDate(article.createdAt)}
          </p>
        </div>

        <p className="text-2xl text-gray-600 font-medium">
          {article.description.slice(0, 65)}...
        </p>

        <Link
          to={`/article/${article.slug}`}
          className="relative group capitalize text-gray-800 font-medium text-2xl mt-10 inline-flex items-center gap-5 after:content-[''] after:absolute after:w-0 hover:after:w-full after:h-[0.20rem] after:bg-gray-800 after:left-0 after:bottom-0 after:transition-all after:duration-1000 after:ease-in-out"
        >
          read more{" "}
          <AiOutlineDoubleRight className="group-hover:ml-3 ml-0 transition-all duration-1000 ease-in-out" />
        </Link>
      </div>
    </div>
  )
}

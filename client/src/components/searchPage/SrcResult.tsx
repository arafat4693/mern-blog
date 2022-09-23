import { Link } from "react-router-dom"
import { FaRegComment } from "react-icons/fa"
import { MongoArticle } from "../../utils/types"
import { BiBookmarkAlt } from "react-icons/bi"
import { formatDate } from "../../utils/utilFunctions"

interface Props {
  article: MongoArticle
  authorName: string
  authorImg: string | undefined
}

export default function SrcResult({ article, authorName, authorImg }: Props) {
  return (
    <div className="mb-24">
      <Link
        to={`/article/${article.slug}`}
        className="w-full h-[48rem] overflow-hidden rounded-3xl inline-block relative shadow-xl shadow-gray-300"
      >
        <img
          src={article.thumbnailImg}
          alt="poster"
          className="w-full h-full object-cover hover:scale-105 scale-100 transition-all duration-700 ease-in-out"
        />

        <div className="bg-violet-700 top-6 right-6 absolute flex gap-4 items-center py-2.5 px-4 rounded-full cursor-auto">
          <span className="text-2xl text-white text-medium flex items-center gap-2">
            <FaRegComment /> {article.totalMessages}
          </span>

          <span className="text-2xl text-white text-medium flex items-center gap-2">
            <BiBookmarkAlt /> {article.bookmarkedBy.length}
          </span>
        </div>
      </Link>

      <p className="text-2xl text-gray-500 capitalize text-center space-x-6 my-6">
        {article.categories.map((c, i) => (
          <Link
            key={i}
            to={`/search/categories/${c}`}
            className="hover:text-gray-800 transition-all duration-500"
          >
            {c}
          </Link>
        ))}
      </p>

      <div className="text-center">
        <Link
          to={`/article/${article.slug}`}
          className="bg-size text-gray-700 text-[2.5rem] leading-none font-medium capitalize hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
        >
          It Really Have Good Feeling When You Enjoy Nature
        </Link>
      </div>

      <Link
        to={`/author/${article.writerId}`}
        className="flex items-center gap-6 justify-center my-8"
      >
        <img
          src={authorImg ? authorImg : "/images/guest.jpg"}
          alt="user"
          className="w-16 h-16 rounded-full object-cover"
        />
        <p className="gap-3 items-end text-2xl text-gray-600 sm:flex hidden">
          By {authorName} <span className="text-3xl font-bold">.</span>{" "}
          {formatDate(article.createdAt)}
        </p>
      </Link>

      <p className="text-2xl text-gray-500 leading-normal text-center px-12">
        {article.description.slice(0, 110)}...
      </p>

      <Link
        to={`/article/${article.slug}`}
        className="capitalize mx-auto mt-8 w-48 h-14 flex items-center justify-center rounded-full bg-violet-700 shadow-lg shadow-violet-300 hover:shadow-none hover:bg-gray-800 transition-all duration-300 text-white text-2xl font-medium"
      >
        read more
      </Link>
    </div>
  )
}

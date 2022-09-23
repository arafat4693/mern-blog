import { Link } from "react-router-dom"
import { MongoArticle, MongoUser } from "../../utils/types"

interface Props {
  article: MongoArticle
  author: MongoUser
}

export default function RelatedPost({ article, author }: Props) {
  return (
    <div>
      <Link
        to={`/article/${article.slug}`}
        className="block mb-8 w-full h-[29rem] rounded-xl overflow-hidden"
      >
        <img
          src={article.thumbnailImg}
          alt="poster"
          className="w-full h-full scale-100 hover:scale-110 transition-all duration-300 object-cover"
        />
      </Link>
      <Link
        to={`/article/${article.slug}`}
        className="text-3xl text-gray-800 font-semibold bg-size hover:text-violet-700 transition-all duration-300 inline bg-gradient-to-r from-violet-700 to-violet-700 bg-no-repeat bg-left-bottom"
      >
        10 Ways To Stick To Your Exercise Routine On Vacation
      </Link>
      <p className="flex flex-wrap mt-1 gap-3 items-end text-2xl text-gray-600">
        {author.displayName} <span className="text-3xl font-bold">.</span>{" "}
        November 18, 2021
      </p>
    </div>
  )
}

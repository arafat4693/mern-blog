import { Link } from "react-router-dom"
import { MongoUser } from "../../utils/types"
import { formateImg } from "../../utils/utilFunctions"

interface Props {
  author: MongoUser
}

export default function AuthorCard({ author }: Props) {
  return (
    <div className="px-3 py-5 bg-gray-200/70 rounded-lg">
      <img
        src={formateImg(author.imgUrl)}
        alt="user"
        className="w-24 h-24 mb-2 mx-auto rounded-full object-cover"
      />
      <div className="text-center">
        <Link
          to={`/author/${author._id}`}
          className="text-2xl relative text-gray-800 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.2rem] after:bg-gray-800 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100 origin-center"
        >
          {author.displayName}
        </Link>
      </div>
      <p className="capitalize text-xl text-gray-500 mt-0.5 text-center">
        author
      </p>
    </div>
  )
}

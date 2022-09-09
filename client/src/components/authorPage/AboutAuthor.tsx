import { MongoUser } from "../../utils/types"
import TooltipIcons from "../layouts/TooltipIcons"

interface Props {
  author: MongoUser
  totalArticles: number
}

export default function AboutAuthor({ author, totalArticles }: Props) {
  return (
    <section className="border border-solid border-gray-300 rounded-3xl p-16 my-20 flex items-center gap-32">
      <img
        src={author?.imgUrl ? author?.imgUrl : "/images/guest.jpg"}
        alt="user"
        className="min-w-[13rem] w-52 h-52 object-cover rounded-full"
      />
      <div>
        <p className="text-xl text-gray-500 capitalize mb-3">Author</p>
        <h2 className="text-6xl text-gray-800 font-medium border-0 border-b-2 border-solid border-gray-800 pb-3">
          {author.displayName}
        </h2>
        <p className="my-10 text-2xl text-gray-500 leading-relaxed">
          My name is {author.displayName}, I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </p>
        <div className="flex justify-between items-center">
          <TooltipIcons />
          <span className="block text-right text-xl text-gray-500 capitalize">
            {totalArticles} articles
          </span>
        </div>
      </div>
    </section>
  )
}

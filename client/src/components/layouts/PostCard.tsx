import { Link } from "react-router-dom"

interface Props {
  articleImg: string
  articleTitle: string
  articleSlug: string
}

export default function PostCard({
  articleImg,
  articleTitle,
  articleSlug,
}: Props) {
  return (
    <figure className="h-[40rem] w-full rounded-xl overflow-hidden relative">
      <img
        src={articleImg}
        alt="recent"
        className="w-full h-full object-cover scale-100 hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-[#00000037]"></div>
      <div className="absolute bottom-0 left-0 right-0 pb-10 px-4 text-center">
        <Link
          to={`/article/${articleSlug}`}
          className="bg-size text-4xl font-semibold text-white text-center capitalize leading-snug transition-all duration-300 bg-gradient-to-r from-white to-white bg-no-repeat bg-position"
        >
          {articleTitle}
        </Link>
      </div>
    </figure>
  )
}

import { Link } from "react-router-dom"

interface Props {
  title: string
  slug: string
  thumbnail: string
}

export default function TrendingBox({ title, slug, thumbnail }: Props) {
  return (
    <article className="w-full h-full relative">
      <img
        src={thumbnail}
        alt="poster"
        className="w-full h-full object-cover transition-all duration-300"
      />

      <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-[#0000004b]"></div>

      <div className="content absolute bottom-0 left-0 right-0 pb-8 px-2 text-center">
        <Link
          to={`/article/${slug}`}
          className="bg-size text-4xl font-semibold text-white capitalize leading-snug transition-all duration-300 bg-gradient-to-r from-white to-white bg-no-repeat bg-left-bottom"
        >
          {title}
        </Link>

        <p className="capitalize text-2xl text-white pt-4">by alice</p>
      </div>
    </article>
  )
}

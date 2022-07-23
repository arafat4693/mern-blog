import { Link } from "react-router-dom"

export default function TrendingBox() {
  return (
    <article className="w-full h-full relative">
      <img
        src="/images/poster.jpg"
        alt="poster"
        className="w-full h-full object-cover transition-all duration-300"
      />

      <div className="content absolute bottom-0 left-0 pb-8 text-center">
        <Link
          to="/"
          className="bg-size text-4xl font-semibold text-white text-center capitalize leading-snug transition-all duration-300 bg-gradient-to-r from-white to-white bg-no-repeat bg-left-bottom"
        >
          together we can make the world a better place
        </Link>

        <p className="capitalize text-2xl text-white pt-4">by alice</p>
      </div>
    </article>
  )
}

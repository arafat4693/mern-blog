import { Link } from "react-router-dom"

export default function RecentPost() {
  return (
    <figure className="h-[40rem] w-full rounded-xl overflow-hidden relative">
      <img
        src="/images/poster.jpg"
        alt="recent"
        className="w-full h-full object-cover scale-100 hover:scale-110 transition-all duration-500 ease-in-out"
      />

      <div className="absolute bottom-0 left-0 pb-10 px-4 text-center">
        <Link
          to="/"
          className="bg-size text-4xl font-semibold text-white text-center capitalize leading-snug transition-all duration-300 bg-gradient-to-r from-white to-white bg-no-repeat bg-position"
        >
          together we can make the world a better place
        </Link>
      </div>
    </figure>
  )
}

import { Link } from "react-router-dom"
import UnderlineHeader from "../layouts/UnderlineHeader"

interface Props {
  authorTags: string[]
}

export default function AuthorTags({ authorTags }: Props) {
  return (
    <div>
      <UnderlineHeader title="featured posts" />
      <div className="flex flex-wrap gap-3 mt-10">
        {authorTags.map((t, i) => (
          <Link
            key={i}
            to={`/search/tags/${t}`}
            className="bg-gray-200/60 rounded-lg text-2xl text-gray-800 tracking-wide px-5 py-3"
          >
            {t}
          </Link>
        ))}
      </div>
    </div>
  )
}

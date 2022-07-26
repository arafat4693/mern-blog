import { Link } from "react-router-dom"
import UnderlineHeader from "../layouts/UnderlineHeader"

interface Props {
  name: string
}

function AuthorTag({ name }: Props) {
  return (
    <Link
      to="/"
      className="bg-gray-200/60 rounded-lg text-2xl text-gray-800 tracking-wide px-5 py-3 capitalize"
    >
      {name}
    </Link>
  )
}

export default function AuthorTags() {
  return (
    <div>
      <UnderlineHeader title="featured posts" />
      <div className="flex flex-wrap gap-3 mt-10">
        <AuthorTag name="art" />
        <AuthorTag name="article" />
        <AuthorTag name="audio" />
        <AuthorTag name="drink" />
        <AuthorTag name="fashion" />
        <AuthorTag name="featured 1" />
        <AuthorTag name="featured 2" />
        <AuthorTag name="featured 3" />
        <AuthorTag name="featured 4" />
        <AuthorTag name="featured 5" />
        <AuthorTag name="featured 6" />
        <AuthorTag name="featured 7" />
        <AuthorTag name="fashion" />
        <AuthorTag name="flower" />
        <AuthorTag name="food" />
        <AuthorTag name="habit" />
        <AuthorTag name="home" />
      </div>
    </div>
  )
}

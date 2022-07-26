import UnderlineHeader from "../layouts/UnderlineHeader"
import AuthorPost from "./AuthorPost"

export default function AuthorsFeatured() {
  return (
    <div className="mb-20">
      <UnderlineHeader title="featured posts" />
      <AuthorPost />
      <AuthorPost />
      <AuthorPost />
      <AuthorPost />
      <AuthorPost />
    </div>
  )
}

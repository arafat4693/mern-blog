import { MongoArticle } from "../../utils/types"
import UnderlineHeader from "../layouts/UnderlineHeader"
import AuthorPost from "./AuthorPost"

interface Props {
  articles: MongoArticle[]
  authorName: string
}

export default function AuthorsFeatured({ articles, authorName }: Props) {
  return (
    <div className="mb-20">
      <UnderlineHeader title="featured posts" />
      {articles.map((a) => (
        <AuthorPost key={a._id} article={a} authorName={authorName} />
      ))}
    </div>
  )
}

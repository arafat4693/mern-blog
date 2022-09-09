import { MongoArticle, MongoUser } from "../../utils/types"
import AuthorImage from "./AuthorImage"
import AuthorsFeatured from "./AuthorsFeatured"
import AuthorTags from "./AuthorTags"
import Follow from "./Follow"
import { useMemo } from "react"

interface Props {
  author: MongoUser
  articles: MongoArticle[]
}

export default function AuthorSidebar({ author, articles }: Props) {
  const authorTags = useMemo(() => {
    const tags: string[] = []
    articles.forEach((a) => tags.push(...a.tags))
    return tags
  }, [articles])

  return (
    <aside className="sticky top-32 left-0 h-fit">
      <AuthorImage
        authorName={author.displayName}
        authorImage={author?.imgUrl ? author?.imgUrl : "/images/guest.jpg"}
      />
      <Follow />
      <AuthorsFeatured
        articles={articles.slice(-5)}
        authorName={author.displayName}
      />
      <AuthorTags authorTags={authorTags} />
    </aside>
  )
}

import { MongoArticle, MongoUser } from "../../utils/types"
import AuthorImage from "./AuthorImage"
import AuthorsFeatured from "./AuthorsFeatured"
import AuthorTags from "./AuthorTags"
import Follow from "./Follow"
import { useMemo } from "react"
import { formateImg } from "../../utils/utilFunctions"

interface Props {
  author: MongoUser
  articles: MongoArticle[]
}

export default function AuthorSidebar({ author, articles }: Props) {
  const authorTags = useMemo(() => {
    const tags: string[] = []
    articles.forEach((a) => tags.push(...a.tags))
    return Array.from(new Set(tags))
  }, [articles])

  return (
    <aside className="col-span-1 md:col-span-2 lg:col-span-1 lg:sticky lg:top-32 lg:left-0 h-fit lg:overflow-hidden">
      <AuthorImage
        authorName={author.displayName}
        authorImage={formateImg(author.imgUrl)}
      />
      <Follow />
      {articles.length ? (
        <AuthorsFeatured
          articles={articles.slice(-5)}
          authorName={author.displayName}
        />
      ) : null}
      {authorTags.length ? <AuthorTags authorTags={authorTags} /> : null}
    </aside>
  )
}

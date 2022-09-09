import { useMemo } from "react"
import { MongoArticle } from "../utils/types"
import { articlesWithPagination } from "../utils/utilFunctions"

export default function usePagination(
  articles: MongoArticle[] | [],
  articlePerPage: number
) {
  const paginationArticles = useMemo(() => {
    if (!articles.length) return []
    return articlesWithPagination(articles, articlePerPage)
  }, [articles, articlePerPage])

  return paginationArticles
}

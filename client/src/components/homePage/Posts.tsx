import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Pagination from "./Pagination"
import Post from "./Post"
import { useEffect, useMemo, useState } from "react"
import { MongoArticle } from "../../utils/types"
import { articlesWithPagination } from "../../utils/utilFunctions"

export default function Posts() {
  const { articles } = useSelector((state: RootState) => state.article)
  const [page, setPage] = useState<number>(0)
  const [randomArticles, setRandomArticles] = useState<MongoArticle[] | []>([])

  useEffect(() => {
    const allArticles = [...articles]
    allArticles.splice(-5)
    allArticles.splice(0, 8)
    setRandomArticles(allArticles)
  }, [articles])

  const paginationArticles = useMemo(() => {
    if (!randomArticles.length) return []
    return articlesWithPagination(randomArticles, 6)
  }, [randomArticles])

  return (
    <div className="col-span-2">
      {paginationArticles.length &&
        paginationArticles[page].map((a) => <Post key={a._id} article={a} />)}
      <Pagination
        setPage={setPage}
        page={page}
        pages={paginationArticles.length}
      />
    </div>
  )
}

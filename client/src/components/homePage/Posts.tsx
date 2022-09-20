import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Pagination from "./Pagination"
import Post from "./Post"
import { useEffect, useState } from "react"
import { MongoArticle } from "../../utils/types"
import usePagination from "../../hooks/usePagination"

export default function Posts() {
  const { articles } = useSelector((state: RootState) => state.article)
  const [page, setPage] = useState<number>(0)
  const [randomArticles, setRandomArticles] = useState<MongoArticle[] | []>([])
  const paginationArticles = usePagination(randomArticles, 6)

  useEffect(() => {
    const allArticles = [...articles]
    allArticles.splice(-5)
    allArticles.splice(0, 8)
    setRandomArticles(allArticles)
  }, [articles])

  return (
    <div className="col-span-1 md:col-span-2 lg:sticky lg:top-32 lg:left-0 h-fit lg:overflow-hidden">
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

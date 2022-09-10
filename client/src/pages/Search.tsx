import SrcBox from "../components/searchPage/SrcBox"
import Sidebar from "../components/layouts/Sidebar"
import { useParams } from "react-router-dom"
import { useGet } from "../hooks/useGet"
import { MongoArticle } from "../utils/types"
import Loader from "../components/layouts/Loader"
import ErrMsg from "../components/layouts/ErrMsg"
import usePagination from "../hooks/usePagination"
import { useState } from "react"
import SrcResult from "../components/searchPage/SrcResult"
import Pagination from "../components/homePage/Pagination"

export default function Search() {
  const [page, setPage] = useState<number>(0)
  const { type, query } = useParams()
  const url =
    type === "tags" || type === "categories"
      ? `/article/tagsOrCats/${type}?q=${query}`
      : `/article/search?q=${query}`
  const { data: articles, loading } = useGet<[] | MongoArticle[]>(
    url,
    [],
    setPage
  )
  const paginationArticles = usePagination(articles, 6)

  return (
    <main>
      <section className="wrapper max-w-[1240px] mx-auto">
        <SrcBox total={articles.length} query={query as string} />

        <div className="grid grid-cols-3 gap-16 mb-20">
          <section
            className="col-span-2 sticky top-36 left-0 h-fit overflow-hidden"
            id="posts"
          >
            {loading ? (
              <Loader />
            ) : articles.length ? (
              paginationArticles[page].map((a) => (
                <SrcResult
                  key={a._id}
                  article={a}
                  authorName={a.displayName}
                  authorImg={a.imgUrl}
                />
              ))
            ) : (
              <ErrMsg msg="no articles found!" />
            )}

            {paginationArticles.length > 1 && (
              <Pagination
                page={page}
                setPage={setPage}
                pages={paginationArticles.length}
              />
            )}
          </section>

          <Sidebar />
        </div>
      </section>
    </main>
  )
}

import { MongoArticle, MongoUser } from "../../utils/types"
import Pagination from "../homePage/Pagination"
import SrcResult from "./SrcResult"
import { useState } from "react"
import usePagination from "../../hooks/usePagination"

interface Props {
  articles: MongoArticle[]
  author: MongoUser
}

export default function SrcResults({ articles, author }: Props) {
  const [page, setPage] = useState<number>(0)
  const paginationArticles = usePagination(articles, 6)

  return (
    <>
      {paginationArticles[page].map((a) => (
        <SrcResult key={a._id} article={a} author={author} />
      ))}

      {paginationArticles.length > 1 && (
        <Pagination
          page={page}
          setPage={setPage}
          pages={paginationArticles.length}
        />
      )}
    </>
  )
}

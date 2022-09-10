import { MongoArticle } from "../../utils/types"
import Pagination from "../homePage/Pagination"
import SrcResult from "./SrcResult"
import { useState } from "react"
import usePagination from "../../hooks/usePagination"

interface Props {
  articles: MongoArticle[]
  authorName: string
  authorImg: string | undefined
}

export default function SrcResults({ articles, authorName, authorImg }: Props) {
  const [page, setPage] = useState<number>(0)
  const paginationArticles = usePagination(articles, 6)

  return (
    <>
      {paginationArticles[page].map((a) => (
        <SrcResult
          key={a._id}
          article={a}
          authorName={authorName}
          authorImg={authorImg}
        />
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

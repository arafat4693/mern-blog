import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AboutAuthor from "../components/authorPage/AboutAuthor"
import AuthorSidebar from "../components/authorPage/AuthorSidebar"
import ErrMsg from "../components/layouts/ErrMsg"
import Loader from "../components/layouts/Loader"
import SrcResults from "../components/searchPage/SrcResults"
import { useAuthGet } from "../hooks/useGet"
import { RootState } from "../redux/store"
import { MongoArticle } from "../utils/types"

export default function Author() {
  const { authorId } = useParams()
  const author = useSelector((state: RootState) =>
    state.user.users.find((u) => u._id === authorId)
  )
  const { data: articles, loading } = useAuthGet<[] | MongoArticle[]>(
    `/article/author/${authorId}`,
    [],
    author
  )

  if (!author) return <ErrMsg msg="Author doesn't exist" />

  return (
    <section className="wrapper max-w-[1240px] mx-auto xl:px-0 px-14">
      <AboutAuthor author={author} totalArticles={articles.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        <section
          className="col-span-1 md:col-span-2 lg:sticky lg:top-32 lg:left-0 h-fit lg:overflow-hidden"
          id="posts"
        >
          {loading ? (
            <Loader />
          ) : articles.length ? (
            <SrcResults
              articles={articles}
              authorName={author.displayName}
              authorImg={author.imgUrl}
            />
          ) : (
            <ErrMsg msg="no articles from this author yet!" />
          )}
        </section>
        <AuthorSidebar author={author} articles={articles} />
      </div>
    </section>
  )
}

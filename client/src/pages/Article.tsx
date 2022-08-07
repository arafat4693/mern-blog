import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { AppDispatch, RootState } from "../redux/store"
import { FaEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"
import "github-markdown-css"
import { deleteArticle } from "../redux/articleSlice"
import { toast } from "react-toastify"
import { resetState } from "../redux/articleSlice"
import Loader from "../components/layouts/Loader"

export default function Article() {
  const { slug } = useParams()
  const {
    articles,
    articleSuccess,
    articleError,
    articleMessage,
    articleLoading,
    articleAction,
  } = useSelector((state: RootState) => state.article)
  const article = articles.find((a) => a.slug === slug)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    if (articleAction === "DELETE") {
      if (articleSuccess) {
        toast(articleMessage, { type: "success", autoClose: 2300 })
        navigate("/")
        dispatch(resetState())
      }
      if (articleError) {
        dispatch(resetState())
        toast(articleMessage, { type: "error", autoClose: 2300 })
      }
    }
  }, [
    articleSuccess,
    articleError,
    articleMessage,
    articleAction,
    dispatch,
    navigate,
  ])

  const onArticleDelete = useCallback(() => {
    if (!article) return
    const makeSure = window.confirm("You really want to delete the article?")
    if (!makeSure) return
    dispatch(deleteArticle(article))
  }, [article, dispatch])

  return (
    <>
      {articleAction === "GET" && articleLoading ? (
        <Loader />
      ) : (
        <main className="mt-24">
          <section className="wrapper max-w-[1240px] mx-auto">
            <figure className="shadow-xl rounded-[2rem] overflow-hidden mb-20 relative">
              <img
                src={article?.thumbnailImg}
                alt="thumbnail"
                className="h-[55rem] w-full object-cover"
              />
              <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-[#0000004b]"></div>
              <div className="bg-violet-700 top-6 right-6 absolute flex gap-4 items-center py-2.5 px-4 rounded-full shadow-sm shadow-violet-500">
                <Link
                  to={`/edit/${slug}`}
                  className="text-3xl text-white text-medium cursor-pointer hover:text-green-300 transition-all"
                >
                  <FaEdit />
                </Link>

                <span
                  className="text-3xl text-white text-medium cursor-pointer hover:text-red-500 transition-all"
                  onClick={onArticleDelete}
                >
                  <MdDelete />
                </span>
              </div>
              <figcaption className="content absolute bottom-0 left-0 w-full mb-20">
                <div className="categories flex gap-4 items-center justify-center">
                  {article?.categories.map((c, i) => (
                    <span
                      key={i}
                      className="text-white pb-1 border-0 border-b-2 border-solid border-white text-2xl tracking-wide"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl font-semibold text-white mt-12 mb-9 text-center">
                  {article?.title}
                </h1>
                <div className="flex justify-center">
                  <figure className="flex items-center gap-3">
                    <img
                      src="/images/user.jpg"
                      alt="user"
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div className="content">
                      <span className="text-white text-xl">Alice</span>
                      <span className="text-white text-base mx-4">/</span>
                      <span className="text-white text-xl">
                        {new Date(article?.createdAt || "").toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <span className="text-white text-base mx-4">/</span>
                      <span className="text-white text-xl">0 Comments</span>
                    </div>
                  </figure>
                </div>
              </figcaption>
            </figure>
            <div
              className="markdown-body"
              dangerouslySetInnerHTML={{ __html: article?.convertedHtml || "" }}
            />
          </section>
        </main>
      )}
    </>
  )
}

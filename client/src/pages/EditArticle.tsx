import OverlapHeader from "../components/layouts/OverlapHeader"
import { SubmitHandler, useForm } from "react-hook-form"
import { ArticleData, MongoArticle } from "../utils/types"
import BlogTags from "../components/writePage/BlogTags"
import Categories from "../components/writePage/Categories"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import ReactLoading from "react-loading"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../components/layouts/Loader"
import { toast } from "react-toastify"
import { updateArticle } from "../redux/articleSlice"
import { resetState } from "../redux/articleSlice"
import ErrMsg from "../components/layouts/ErrMsg"
import { useGet } from "../hooks/useGet"

export default function EditArticle() {
  const {
    articleSuccess,
    articleError,
    articleMessage,
    articleLoading,
    articleAction,
    articleSlug,
  } = useSelector((state: RootState) => state.article)
  const { slug } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { data: article, loading } = useGet<undefined | MongoArticle>(
    `/article/${slug}`,
    undefined
  )
  const { register, handleSubmit, setValue } = useForm<ArticleData>()
  const [categories, setCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (article) {
      setTags(article.tags)
      setCategories(article.categories)
      setValue("title", article.title)
      setValue("description", article.description)
      setValue("markdown", article.markdown)
    }
  }, [article, setValue])

  useEffect(() => {
    if (articleAction === "UPDATE") {
      if (articleSuccess) {
        toast(articleMessage, { type: "success", autoClose: 2300 })
        navigate(`/article/${articleSlug}`)
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
    articleSlug,
  ])

  const onArticleUpdate: SubmitHandler<ArticleData> = (data) => {
    if (!article) return
    if (!categories.length)
      return toast("At least one category is required", {
        type: "info",
        autoClose: 2300,
      })
    dispatch(
      updateArticle({
        ...data,
        tags,
        categories,
        articleId: article._id,
        thumbnailImg: article.thumbnailImg,
        thumbnailImgName: article.thumbnailImgName,
      })
    )
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : article ? (
        <main className="sm:mt-40 mt-24">
          <section className="wrapper max-w-[1240px] mx-auto xl:px-0 px-14">
            <OverlapHeader
              title="Edit your blog"
              overlapTitle="before:content-['update']"
            />
            <form
              className="w-[75rem] max-w-full mx-auto mt-24"
              onSubmit={handleSubmit(onArticleUpdate)}
            >
              <div>
                <label
                  htmlFor="title"
                  className="block text-2xl text-gray-500 mb-2"
                >
                  Blog title
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  id="title"
                  className="w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
                />
              </div>

              <div className="mt-10">
                <label
                  htmlFor="desc"
                  className="block text-2xl text-gray-500 mb-2"
                >
                  Blog description
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  id="desc"
                  className="w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
                />
              </div>

              <div className="mt-10">
                <label
                  htmlFor="thumbnail"
                  className="block text-2xl text-gray-500 mb-2"
                >
                  Blog thumbnail
                </label>
                <input
                  {...register("thumbnail")}
                  type="file"
                  id="thumbnail"
                  className="w-full bg-gray-200/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
                />
              </div>

              <div className="mt-10">
                <label
                  htmlFor="markdown"
                  className="block text-2xl text-gray-500 mb-2"
                >
                  Markdown
                </label>
                <textarea
                  {...register("markdown", { required: true })}
                  id="markdown"
                  className="w-full resize-y h-96 bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
                />
              </div>

              <BlogTags tags={tags} setTags={setTags} />
              <Categories
                categories={categories}
                setCategories={setCategories}
              />

              {articleAction === "UPDATE" && articleLoading ? (
                <div className={`mt-8`}>
                  <ReactLoading
                    type={"bubbles"}
                    color={"#5b21b6"}
                    height={25}
                    width={40}
                  />
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-14">
                  <input
                    type="submit"
                    value="update"
                    className="text-white w-full sm:w-auto bg-violet-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
                  />
                  <button
                    type="button"
                    onClick={() => navigate(`/article/${slug}`)}
                    className="text-white w-full sm:w-auto bg-green-600 hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
                  >
                    go back
                  </button>
                </div>
              )}
            </form>
          </section>
        </main>
      ) : (
        <ErrMsg msg="article couldn't found" />
      )}
    </>
  )
}

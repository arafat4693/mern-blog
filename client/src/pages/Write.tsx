import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import ReactLoading from "react-loading"
import OverlapHeader from "../components/layouts/OverlapHeader"
import BlogTags from "../components/writePage/BlogTags"
import Categories from "../components/writePage/Categories"
import { createArticle, resetState } from "../redux/articleSlice"
import { AppDispatch, RootState } from "../redux/store"
import { ArticleData } from "../utils/types"
import { useNavigate } from "react-router-dom"

export default function Write() {
  const { register, handleSubmit, reset } = useForm<ArticleData>()
  const [categories, setCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.user)
  const {
    articleSuccess,
    articleError,
    articleMessage,
    articleLoading,
    articleAction,
    articleSlug,
  } = useSelector((state: RootState) => state.article)
  const navigate = useNavigate()

  useEffect(() => {
    if (articleAction === "CREATE") {
      if (articleSuccess) {
        toast(articleMessage, { type: "success", autoClose: 2300 })
        navigate(`/article/${articleSlug}`)
        setTags([])
        setCategories([])
        reset()
        dispatch(resetState())
      }
      if (articleError) {
        toast(articleMessage, { type: "error", autoClose: 2300 })
        dispatch(resetState())
      }
    }
  }, [
    articleSuccess,
    articleError,
    articleMessage,
    articleAction,
    articleSlug,
    dispatch,
    reset,
    setTags,
    setCategories,
    navigate,
  ])

  const createBlog: SubmitHandler<ArticleData> = (data) => {
    if (!user)
      return toast("Please login first", { type: "info", autoClose: 2300 })
    if (!categories.length)
      return toast("At least one category is required", {
        type: "info",
        autoClose: 2300,
      })
    dispatch(createArticle({ ...data, tags, categories, writerId: user._id }))
  }

  return (
    <main className="sm:mt-40 mt-24">
      <section className="wrapper max-w-[1240px] mx-auto xl:px-0 px-14">
        <OverlapHeader
          title="Write your blog"
          overlapTitle="before:content-['create']"
        />
        <form
          className="w-[75rem] max-w-full mx-auto mt-24"
          onSubmit={handleSubmit(createBlog)}
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
            <label htmlFor="desc" className="block text-2xl text-gray-500 mb-2">
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
              {...register("thumbnail", { required: true })}
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
          <Categories categories={categories} setCategories={setCategories} />

          {articleAction === "CREATE" && articleLoading ? (
            <div className={`mt-8`}>
              <ReactLoading
                type={"bubbles"}
                color={"#5b21b6"}
                height={25}
                width={40}
              />
            </div>
          ) : (
            <input
              type="submit"
              value="create"
              className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-14 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
            />
          )}
        </form>
      </section>
    </main>
  )
}

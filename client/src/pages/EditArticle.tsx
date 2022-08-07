import OverlapHeader from "../components/layouts/OverlapHeader"
import { SubmitHandler, useForm } from "react-hook-form"
import { ArticleData } from "../utils/types"
import BlogTags from "../components/writePage/BlogTags"
import Categories from "../components/writePage/Categories"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import ReactLoading from "react-loading"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../components/layouts/Loader"

export default function EditArticle() {
  const {
    articles,
    articleSuccess,
    articleError,
    articleMessage,
    articleLoading,
    articleAction,
    articleSlug,
  } = useSelector((state: RootState) => state.article)
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  const { register, handleSubmit, reset } = useForm<ArticleData>()
  const [categories, setCategories] = useState<string[]>(
    article?.categories || []
  )
  const [tags, setTags] = useState<string[]>(article?.tags || [])
  const navigate = useNavigate()

  const onArticleUpdate: SubmitHandler<ArticleData> = (data) => {
    console.log(data)
  }

  console.log(article)

  return (
    <>
      {articleAction === "GET" && articleLoading ? (
        <Loader />
      ) : (
        <main className="mt-40">
          <section className="wrapper max-w-[1240px] mx-auto">
            <OverlapHeader
              title="Edit your blog"
              overlapTitle="before:content-['update']"
            />
            <form
              className="w-[75rem] mx-auto mt-24"
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
                  //   defaultValue={article?.title}
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
                  //   defaultValue={article?.description}
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
                  //   defaultValue={article?.markdown}
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
                <div className="flex gap-4">
                  <input
                    type="submit"
                    // defaultValue="create"
                    className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-14 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
                  />
                  <button
                    onClick={() => navigate(`/article/${slug}`)}
                    className="text-white bg-green-600 hover:bg-gray-700 transition-all duration-300 mt-14 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
                  >
                    go back
                  </button>
                </div>
              )}
            </form>
          </section>
        </main>
      )}
    </>
  )
}

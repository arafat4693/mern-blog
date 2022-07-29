import OverlapHeader from "../components/layouts/OverlapHeader"
import BlogTags from "../components/writePage/BlogTags"
import Categories from "../components/writePage/Categories"

export default function Write() {
  function createBlog(e: any) {
    e.preventDefault()
  }
  return (
    <main className="mt-40">
      <section className="wrapper max-w-[1240px] mx-auto">
        <OverlapHeader
          title="Write your blog"
          overlapTitle="before:content-['create']"
        />
        <form className="w-[75rem] mx-auto mt-24" onSubmit={createBlog}>
          <div>
            <label
              htmlFor="title"
              className="block text-2xl text-gray-500 mb-2"
            >
              Blog title
            </label>
            <input
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
              id="markdown"
              className="w-full resize-y h-96 bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
            />
          </div>

          <BlogTags />
          <Categories />

          <input
            type="submit"
            value="create"
            className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-14 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
          />
        </form>
      </section>
    </main>
  )
}

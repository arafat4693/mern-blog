import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { RootState } from "../redux/store"
import "github-markdown-css"

export default function Article() {
  const { slug } = useParams()
  const { articles } = useSelector((state: RootState) => state.article)
  const article = articles.find((a) => a.slug === slug)

  return (
    <main className="mt-24">
      <section className="wrapper max-w-[1240px] mx-auto">
        <figure className="shadow-xl rounded-[2rem] overflow-hidden mb-20 relative">
          <img
            src={article?.thumbnailImg}
            alt="thumbnail"
            className="h-[55rem] w-full object-cover"
          />
          <div className="overlay absolute top-0 left-0 right-0 bottom-0 bg-[#00000033]"></div>
          <figcaption className="content absolute bottom-0 left-0 w-full text-center">
            <h1 className="text-5xl font-semibold text-white">
              {/* {article?.title} */}
              What to Think About When Everything Goes Wrong
            </h1>
          </figcaption>
        </figure>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: article?.convertedHtml || "" }}
        />
      </section>
    </main>
  )
}

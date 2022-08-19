import { useSelector } from "react-redux"
import OverlapHeader from "../components/layouts/OverlapHeader"
import ErrMsg from "../components/layouts/ErrMsg"
import { RootState } from "../redux/store"
import { useMemo } from "react"
import Loader from "../components/layouts/Loader"
import BookmarkPost from "../components/layouts/PostCard"

export default function Comments() {
  const { user } = useSelector((state: RootState) => state.user)
  const { articles, articleAction, articleLoading } = useSelector(
    (state: RootState) => state.article
  )

  const bookmarkedArticles = useMemo(() => {
    if (user === null || articles.length === 0) return []
    const userBookmarked = new Set(user.bookmarked)
    return articles.filter((a) => userBookmarked.has(a._id))
  }, [user, articles])

  if (!user) return <ErrMsg msg="Login to see your bookmarked" />

  return (
    <>
      {articleAction === "GET" && articleLoading ? (
        <Loader />
      ) : bookmarkedArticles.length ? (
        <main className="mt-40">
          <section className="wrapper max-w-[1240px] mx-auto">
            <OverlapHeader
              title="Your favorites"
              overlapTitle="before:content-['bookmarks']"
            />

            <div className="grid grid-cols-3 gap-8 mt-28">
              {bookmarkedArticles.map((b) => (
                <BookmarkPost
                  key={b._id}
                  articleTitle={b.title}
                  articleImg={b.thumbnailImg}
                  articleSlug={b.slug}
                />
              ))}
            </div>
          </section>
        </main>
      ) : (
        <ErrMsg msg="You didn't bookmark any article" />
      )}
    </>
  )
}

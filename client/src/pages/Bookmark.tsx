import { useSelector } from "react-redux"
import OverlapHeader from "../components/layouts/OverlapHeader"
import ErrMsg from "../components/layouts/ErrMsg"
import { RootState } from "../redux/store"
import Loader from "../components/layouts/Loader"
import BookmarkPost from "../components/layouts/PostCard"
import { useAuthGet } from "../hooks/useGet"
import { MongoArticle } from "../utils/types"

export default function Bookmark() {
  const { user } = useSelector((state: RootState) => state.user)
  const { data: bookmarkedArticles, loading } = useAuthGet<[] | MongoArticle[]>(
    `/article/${user?._id}/usersBookmarked`,
    [],
    user
  )

  if (!user) return <ErrMsg msg="Login to see your bookmarked" />

  return (
    <>
      {loading ? (
        <Loader />
      ) : bookmarkedArticles.length ? (
        <main className="sm:mt-40 mt-24">
          <section className="wrapper max-w-[1240px] mx-auto xl:px-0 px-14">
            <OverlapHeader
              title="Your favorites"
              overlapTitle="before:content-['bookmarks']"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 sm:mt-28">
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

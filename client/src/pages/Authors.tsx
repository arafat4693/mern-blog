import OverlapHeader from "../components/layouts/OverlapHeader"
import AuthorCard from "../components/authorPage/AuthorCard"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import { useMemo } from "react"
import Loader from "../components/layouts/Loader"
import ErrMsg from "../components/layouts/ErrMsg"

export default function Authors() {
  const { user, users, userLoading } = useSelector(
    (state: RootState) => state.user
  )

  const authors = useMemo(() => {
    if (user === null) return []
    return users.filter((u) => u._id !== user._id)
  }, [user, users])

  return (
    <>
      {userLoading ? (
        <Loader />
      ) : authors.length ? (
        <main className="mt-40">
          <section className="wrapper max-w-[1240px] mx-auto">
            <OverlapHeader
              title="All authors"
              overlapTitle="before:content-['authors']"
            />

            <section className="mt-24">
              <div className="header flex justify-between items-center">
                <nav className="flex gap-2">
                  <button className="text-2xl activeLink">All</button>
                  <button className="text-2xl normalLink">Following</button>
                  <button className="text-2xl normalLink">Followers</button>
                </nav>

                <form className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search author"
                    className="text-xl bg-gray-200/70 text-gray-700 p-4 w-[25rem]"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer p-4 text-xl font-medium"
                  />
                </form>
              </div>

              <div className="grid grid-cols-6 gap-6 mt-8">
                {authors.map((a) => (
                  <AuthorCard key={a._id} author={a} />
                ))}
              </div>
            </section>
          </section>
        </main>
      ) : (
        <ErrMsg msg="no authors yet" />
      )}
    </>
  )
}

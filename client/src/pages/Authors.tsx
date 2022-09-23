import OverlapHeader from "../components/layouts/OverlapHeader"
import AuthorCard from "../components/authorPage/AuthorCard"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import { useCallback, useEffect, useMemo, useState } from "react"
import Loader from "../components/layouts/Loader"
import ErrMsg from "../components/layouts/ErrMsg"
import Tab from "../components/authorPage/Tab"
import { tabs } from "../utils/data"
import { MongoUser } from "../utils/types"

export default function Authors() {
  const { user, users, userLoading, userAction } = useSelector(
    (state: RootState) => state.user
  )

  const [search, setSearch] = useState<string>("")
  const [authors, setAuthors] = useState<MongoUser[] | []>([])

  const [currentTab, setCurrentTab] = useState<
    "all" | "following" | "followers"
  >("all")

  const allAuthors = useMemo(() => {
    let allAuthors = users
    if (user) {
      allAuthors = users.filter((u) => u._id !== user._id)
    }
    return allAuthors
  }, [users, user])

  useEffect(() => {
    if (user === null) {
      setCurrentTab("all")
    }
    setAuthors(allAuthors)
  }, [allAuthors, user, setAuthors, setCurrentTab])

  const userFollowers = useMemo(
    () => new Set(user?.followers),
    [user?.followers]
  )

  const userFollowing = useMemo(
    () => new Set(user?.following),
    [user?.following]
  )

  const navigateTab = useCallback(
    (name: "all" | "following" | "followers") => {
      if (name === currentTab) return

      if (name === "all") {
        setAuthors(allAuthors)
      } else if (name === "followers") {
        setAuthors(allAuthors.filter((u) => userFollowers.has(u._id)))
      } else {
        setAuthors(allAuthors.filter((u) => userFollowing.has(u._id)))
      }

      setCurrentTab(name)
    },
    [
      currentTab,
      allAuthors,
      userFollowers,
      userFollowing,
      setAuthors,
      setCurrentTab,
    ]
  )

  const searchAuthor = useCallback(
    (e: any) => {
      e.preventDefault()
      if (!search) return
      const searchedUsers = allAuthors.filter(
        (u) =>
          u.displayName.toLowerCase().includes(search.toLowerCase()) &&
          ((currentTab === "following" && userFollowing.has(u._id)) ||
            (currentTab === "followers" && userFollowers.has(u._id)) ||
            currentTab === "all")
      )
      setAuthors(searchedUsers)
      setSearch("")
    },
    [
      allAuthors,
      currentTab,
      userFollowing,
      userFollowers,
      search,
      setAuthors,
      setSearch,
    ]
  )

  return (
    <>
      {userLoading && userAction === "GET" ? (
        <Loader />
      ) : users.length ? (
        <main className="sm:mt-40 mt-24">
          <section className="wrapper max-w-[1240px] mx-auto xl:px-0 px-14">
            <OverlapHeader
              title="All authors"
              overlapTitle="before:content-['authors']"
            />

            <section className="sm:mt-24 mt-12">
              <div className="header flex sm:flex-row sm:justify-between items-center justify-center flex-col-reverse">
                <nav className="flex gap-2">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.id}
                      navigateTab={navigateTab}
                      name={tab.name}
                      currentTab={currentTab}
                      isUser={user ? true : false}
                    />
                  ))}
                </nav>

                <form
                  className="flex items-center sm:mb-0 mb-10 w-[30rem] max-w-full"
                  onSubmit={searchAuthor}
                >
                  <input
                    type="text"
                    placeholder="Search author"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="text-xl bg-gray-200/70 text-gray-700 p-4 w-full"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer p-4 text-xl font-medium"
                  />
                </form>
              </div>

              {authors.length ? (
                <div className="grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 gap-6 mt-8">
                  {authors.map((a) => (
                    <AuthorCard key={a._id} author={a} />
                  ))}
                </div>
              ) : (
                <ErrMsg msg="authors not found" />
              )}
            </section>
          </section>
        </main>
      ) : (
        <ErrMsg msg="no authors yet" />
      )}
    </>
  )
}

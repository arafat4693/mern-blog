import OverlapHeader from "../components/layouts/OverlapHeader"
import AuthorCard from "../components/authorPage/AuthorCard"

export default function Authors() {
  return (
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
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
          </div>
        </section>
      </section>
    </main>
  )
}

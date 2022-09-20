import Ad from "../components/homePage/Ad"
import Posts from "../components/homePage/Posts"
import Sidebar from "../components/layouts/Sidebar"
import Trending from "../components/homePage/Trending"

export default function Home() {
  return (
    <section className="px-14 xl:px-0">
      <Trending />
      <Ad />

      <main className="wrapper max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <Posts />
        <Sidebar />
      </main>
    </section>
  )
}

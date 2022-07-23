import Ad from "../components/homePage/Ad"
import Posts from "../components/homePage/Posts"
import Sidebar from "../components/homePage/Sidebar"
import Trending from "../components/homePage/Trending"

export default function Home() {
  return (
    <>
      <Trending />
      <Ad />

      <main>
        <div className="wrapper max-w-[1240px] h-full mx-auto rounded-xl grid grid-cols-3 gap-16">
          <Posts />
          <Sidebar />
        </div>
      </main>
    </>
  )
}

import SrcBox from "../components/searchPage/SrcBox"
import Sidebar from "../components/layouts/Sidebar"
import SrcResults from "../components/searchPage/SrcResults"
import { useParams } from "react-router-dom"

export default function Search() {
  const { type, query } = useParams()

  console.log(type, query)

  return (
    <main>
      <section className="wrapper max-w-[1240px] mx-auto">
        <SrcBox />

        <div className="grid grid-cols-3 gap-16 mb-20">
          {/* <SrcResults /> */}
          <Sidebar />
        </div>
      </section>
    </main>
  )
}

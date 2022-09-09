import Banner from "../homePage/Banner"
import Featured from "../homePage/Featured"
import Tags from "../homePage/Tags"

export default function Sidebar() {
  return (
    <aside className="sticky top-32 left-0 h-fit overflow-hidden">
      <Tags />
      <Banner />
      <Featured />
    </aside>
  )
}

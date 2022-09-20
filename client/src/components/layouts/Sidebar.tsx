import Banner from "../homePage/Banner"
import Featured from "../homePage/Featured"
import Tags from "../homePage/Tags"

export default function Sidebar() {
  return (
    <aside className="col-span-1 md:col-span-2 lg:col-span-1 lg:sticky lg:top-32 lg:left-0 h-fit lg:overflow-hidden">
      <Tags />
      <Banner />
      <Featured />
    </aside>
  )
}

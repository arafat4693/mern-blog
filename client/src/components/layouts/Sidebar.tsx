import Banner from "../homePage/Banner"
import Featured from "../homePage/Featured"
import Tags from "../homePage/Tags"

export default function Sidebar() {
  return (
    <div className="sticky top-0 left-0 h-fit overflow-hidden">
      <Tags />
      <Banner />
      <Featured />
    </div>
  )
}

import Banner from "./Banner"
import Featured from "./Featured"
import Tags from "./Tags"

export default function Sidebar() {
  return (
    <div className="sticky top-0 left-0 h-fit overflow-hidden">
      <Tags />
      <Banner />
      <Featured />
    </div>
  )
}

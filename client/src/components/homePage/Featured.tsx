import SideHeader from "./SideHeader"
import MenuCard from "../layouts/MenuCard"
import { RootState } from "../../redux/store"
import { useSelector } from "react-redux"

export default function Featured() {
  const { articles } = useSelector((state: RootState) => state.article)
  return (
    <div>
      <SideHeader title="featured posts" />
      {articles.slice(-5).map((a, idx) => (
        <MenuCard key={a._id} article={a} last={idx === 4} />
      ))}
    </div>
  )
}

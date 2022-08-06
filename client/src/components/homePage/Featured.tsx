import SideHeader from "./SideHeader"
import MenuCard from "../layouts/MenuCard"
import { RootState } from "../../redux/store"
import { useSelector } from "react-redux"
import { MongoArticle } from "../../utils/types"

export default function Featured() {
  const { articles } = useSelector((state: RootState) => state.article)
  return (
    <div>
      {/* **last** will get implemented soon */}
      <SideHeader title="featured posts" />
      {articles.map((a: MongoArticle) => (
        <MenuCard key={a._id} article={a} />
      ))}
    </div>
  )
}

import SideHeader from "./SideHeader"
import MenuCard from "../layouts/MenuCard"

export default function Featured() {
  return (
    <div>
      <SideHeader title="featured posts" />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard last />
    </div>
  )
}

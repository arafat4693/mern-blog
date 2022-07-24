import SideHeader from "./SideHeader"
import Tag from "./Tag"

export default function Tags() {
  return (
    <div className="mb-20">
      <SideHeader title="tag cloud" />
      <Tag title="entertainment" total={15} bgColor="bg-blue-600" />
      <Tag title="health" total={10} bgColor="bg-gray-700" />
      <Tag title="illustration" total={13} bgColor="bg-emerald-400" />
      <Tag title="life style" total={19} bgColor="bg-orange-600" />
    </div>
  )
}

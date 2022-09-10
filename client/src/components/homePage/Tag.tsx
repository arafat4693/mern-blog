import { Link } from "react-router-dom"

interface Props {
  title: string
  total: number
  bgColor: string
}

export default function Tag({ title, total, bgColor }: Props) {
  return (
    <Link
      to={`/search/categories/${title}`}
      className={`${bgColor} rounded-lg p-4 text-2xl font-medium capitalize text-white flex justify-between mb-4`}
    >
      {title} <span className="font-normal">{total}</span>
    </Link>
  )
}

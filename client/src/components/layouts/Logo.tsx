import { Link } from "react-router-dom"

interface Profs {
  customStyle: string
}

export default function Logo({ customStyle }: Profs) {
  return (
    <Link to="/" className={`${customStyle} text-gray-800 font-bold block`}>
      Furify
      <span className="text-violet-600">.</span>
    </Link>
  )
}

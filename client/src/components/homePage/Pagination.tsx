import { Dispatch } from "react"

interface Props {
  page: number
  pages: number
  setPage: Dispatch<number>
}

export default function Pagination({ page, pages, setPage }: Props) {
  return (
    <div className="flex justify-center gap-4 mt-24">
      {Array(pages)
        .fill(0)
        .map((z, i) => (
          <a
            href="#posts"
            onClick={() => {
              setPage(i)
            }}
            key={i}
            className={`w-16 h-16 flex justify-center items-center rounded-lg border border-solid border-gray-300 text-2xl ${
              page + 1 === i + 1
                ? "text-white bg-gray-800"
                : "text-gray-800 hover:text-white hover:bg-gray-800"
            } cursor-pointer transition-all duration-300`}
          >
            {i + 1}
          </a>
        ))}
    </div>
  )
}

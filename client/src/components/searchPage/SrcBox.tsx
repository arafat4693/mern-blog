interface Props {
  total: number
  query: string
}

export default function SrcBox({ total, query }: Props) {
  return (
    <section className="border border-solid border-gray-300 rounded-3xl p-16 my-20">
      <p className="text-xl text-gray-500 capitalize">search results for</p>
      <h2 className="text-6xl text-gray-800 font-medium border-0 border-b-2 border-solid border-gray-800 my-6 pb-3">
        {query}
      </h2>
      <span className="block text-right text-xl text-gray-500 capitalize">
        {total} articles
      </span>
    </section>
  )
}

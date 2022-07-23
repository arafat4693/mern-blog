export default function Pagination() {
  return (
    <div className="flex justify-center gap-4 mt-24">
      <span className="w-16 h-16 flex justify-center items-center rounded-lg border border-solid border-gray-300 text-2xl text-white bg-gray-800 cursor-pointer transition-all duration-300">
        1
      </span>
      <span className="w-16 h-16 flex justify-center items-center rounded-lg border border-solid border-gray-300 text-2xl text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer transition-all duration-300">
        2
      </span>
      <span className="w-16 h-16 flex justify-center items-center rounded-lg border border-solid border-gray-300 text-2xl text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer transition-all duration-300">
        3
      </span>
      <span className="w-16 h-16 flex justify-center items-center rounded-lg border border-solid border-gray-300 text-2xl text-gray-800 hover:text-white hover:bg-gray-800 cursor-pointer transition-all duration-300">
        4
      </span>
    </div>
  )
}

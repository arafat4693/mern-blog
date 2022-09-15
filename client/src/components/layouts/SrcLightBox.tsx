import { SearchIcon, XIcon } from "@heroicons/react/outline"
import { Dispatch, useState } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
  closeSrc: boolean
  setCloseSrc: Dispatch<boolean>
}

export default function SrcLightBox({ closeSrc, setCloseSrc }: Props) {
  const [search, setSearch] = useState<string>("")
  const navigate = useNavigate()

  function closeLbx(e: any): void {
    const lb = e.target.classList.contains("lightBox")
    if (!lb) return
    setCloseSrc(true)
  }

  function searchQuery(e: any) {
    e.preventDefault()
    navigate(`/search/title/${search}`)
    setCloseSrc(true)
  }

  return (
    <div
      className={`lightBox z-10 w-screen h-screen fixed top-0 left-0 bg-gray-700/60 backdrop-blur-sm transition-all ease-in duration-300 ${
        closeSrc ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      onClick={closeLbx}
    >
      <div
        className={`bg-white w-full h-[30rem] sm:h-[40rem] flex items-center justify-center relative transition-all ease-in duration-300 ${
          closeSrc ? "-translate-y-[110%]" : "translate-y-0"
        }`}
      >
        <XIcon
          onClick={() => setCloseSrc(true)}
          className="w-14 h-14 absolute stroke-gray-400 top-10 right-10 cursor-pointer transition-all duration-200 hover:rotate-180"
        />

        <div className="max-w-[90%]">
          <label
            htmlFor="src"
            className="text-gray-300 text-3xl sm:text-4xl font-medium mb-8 block text-center"
          >
            Type and hit Enter to search
          </label>

          <form className="relative" onSubmit={searchQuery}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              id="src"
              className="w-[70rem] max-w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
              placeholder="Search ..."
            />
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
              type="submit"
            >
              <SearchIcon className="w-11 h-11 stroke-gray-400" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

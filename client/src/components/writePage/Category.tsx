import { Dispatch, useState } from "react"

interface Props {
  name: string
  selectCategory: Dispatch<string[] | ((prev: string[]) => string[])>
  categories: string[]
}

export default function Category({ name, selectCategory, categories }: Props) {
  const [active, setActive] = useState<boolean>(false)

  function selectOrUnselect(value: string) {
    if (categories.includes(value)) {
      setActive(false)
      selectCategory((prev) => prev.filter((i: string) => i !== value))
    } else {
      setActive(true)
      selectCategory((prev) => [...prev, value])
    }
  }

  return (
    <h1
      onClick={(e: any) => selectOrUnselect(e.target.textContent.toLowerCase())}
      className={`h-16 rounded-lg cursor-pointer px-8 flex items-center text-2xl capitalize font-medium transition-all duration-300 ${
        active
          ? "bg-violet-800 text-white"
          : "bg-gray-200/70 text-gray-800 hover:bg-violet-800 hover:text-white"
      }`}
    >
      {name}
    </h1>
  )
}

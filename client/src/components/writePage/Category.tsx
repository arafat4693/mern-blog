import { Dispatch, useEffect, useState } from "react"
// import { useSelector } from "react-redux"
// import { RootState } from "../../redux/store"

interface Props {
  name: string
  selectCategory: Dispatch<(prev: string[]) => string[]>
  categories: string[]
}

export default function Category({ name, selectCategory, categories }: Props) {
  const [active, setActive] = useState<boolean>(false)
  // const { articleSuccess } = useSelector((state: RootState) => state.article)

  useEffect(() => {
    if (categories) {
      setActive(categories.includes(name))
    }
  }, [categories, setActive, name])

  // useEffect(() => {
  //   if (articleSuccess) setActive(false)
  // }, [articleSuccess, setActive])

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
      className={`h-16 rounded-lg cursor-pointer px-8 flex items-center text-2xl font-medium transition-all duration-300 ${
        active
          ? "bg-violet-800 text-white"
          : "bg-gray-200/70 text-gray-800 hover:bg-violet-800 hover:text-white"
      }`}
    >
      {name}
    </h1>
  )
}

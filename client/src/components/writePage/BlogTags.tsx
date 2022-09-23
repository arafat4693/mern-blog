import { Dispatch } from "react"
import { toast } from "react-toastify"
import BlogTag from "./BlogTag"

interface Props {
  tags: string[]
  setTags: Dispatch<(prev: string[]) => string[]>
}

export default function BlogTags({ tags, setTags }: Props) {
  function addTag(e: any) {
    if (e.key === "Enter") {
      const tag = e.target.innerText.replace(/\s+/g, " ").trim()
      if (tags.includes(tag)) {
        toast("Tag already exists", { type: "info", autoClose: 2300 })
      } else {
        setTags((prev) => [...prev, tag])
      }
      e.target.innerText = ""
    }
  }

  return (
    <div className="mt-10">
      <label htmlFor="tags" className="flex gap-2 text-2xl text-gray-500 mb-2">
        Tags
        <span className="text-lg text-gray-500 mt-1 hidden sm:block">
          (Maximum 5 tags)
        </span>
      </label>

      <div className="tags flex items-center gap-2 flex-wrap bg-gray-200/70 rounded-lg py-6 px-6">
        {tags.map((tag, i) => (
          <BlogTag key={i} name={tag} setTags={setTags} />
        ))}
        <span
          contentEditable="true"
          id="allTags"
          className={`grow bg-transparent text-xl text-gray-800 h-[17.5px] overflow-hidden ${
            tags.length === 5 ? "hidden" : "block"
          }`}
          onKeyUp={addTag}
        />
      </div>
    </div>
  )
}

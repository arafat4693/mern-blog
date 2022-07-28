import { useState } from "react"
import UnderlineHeader from "../layouts/UnderlineHeader"
import BlogTag from "./BlogTag"

export default function BlogTags() {
  const [tags, setTags] = useState<string[]>([])

  function addTag(e: any) {
    if (e.key === "Enter") {
      if (tags.length >= 5) {
        console.log("You can put maximum 5 tags")
      } else {
        const tag = e.target.value.replace(/\s+/g, "")
        if (tags.includes(tag)) {
          console.log("Tag already exists")
        } else {
          setTags((prev: string[]) => [...prev, tag])
        }
      }
      e.target.value = ""
    }
  }

  return (
    <div className="mt-12">
      <div className="flex gap-2">
        <UnderlineHeader title="tags" />
        <span className="text-xl text-gray-500 mt-2">(Maximum 5 tags)</span>
      </div>

      <div className="tags flex gap-2 flex-wrap mt-6 bg-gray-200/70 rounded-lg py-6 px-6">
        {tags.map((tag, i) => (
          <BlogTag key={i} name={tag} />
        ))}
        <input
          type="text"
          className="grow bg-transparent text-xl text-gray-800"
          onKeyUp={addTag}
        />
      </div>
    </div>
  )
}

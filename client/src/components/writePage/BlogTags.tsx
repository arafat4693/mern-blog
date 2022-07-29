import { useState } from "react"
import BlogTag from "./BlogTag"

export default function BlogTags() {
  const [tags, setTags] = useState<string[]>([])

  function addTag(e: any) {
    if (e.key === "Enter") {
      if (tags.length >= 5) {
        console.log("You can put maximum 5 tags")
      } else {
        const tag = e.target.value.replace(/\s+/g, " ")
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
    <div className="mt-10">
      <label htmlFor="tags" className="block text-2xl text-gray-500 mb-2">
        Tags
      </label>

      <div className="tags flex gap-2 flex-wrap bg-gray-200/70 rounded-lg py-6 px-6">
        {tags.map((tag, i) => (
          <BlogTag key={i} name={tag} setTags={setTags} />
        ))}
        <input
          type="text"
          id="tags"
          className="grow bg-transparent text-xl text-gray-800"
          onKeyUp={addTag}
        />
      </div>
    </div>
  )
}

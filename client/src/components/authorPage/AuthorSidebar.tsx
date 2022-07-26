import AuthorImage from "./AuthorImage"
import AuthorsFeatured from "./AuthorsFeatured"
import AuthorTags from "./AuthorTags"
import Follow from "./Follow"

export default function AuthorSidebar() {
  return (
    <aside className="sticky top-0 left-0 h-fit">
      <AuthorImage />
      <Follow />
      <AuthorsFeatured />
      <AuthorTags />
    </aside>
  )
}

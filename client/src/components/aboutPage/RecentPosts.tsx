import OverlapHeader from "../layouts/OverlapHeader"
import RecentPost from "./RecentPost"

export default function RecentPosts() {
  return (
    <section className="mt-52">
      <OverlapHeader
        title="recent posts"
        overlapTitle="before:content-['creative']"
      />

      <div className="posts grid grid-cols-3 gap-8 mt-28">
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
        <RecentPost />
      </div>
    </section>
  )
}

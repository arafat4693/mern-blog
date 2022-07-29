import Comment from "../components/commentPage/Comment"
import OverlapHeader from "../components/layouts/OverlapHeader"

export default function Comments() {
  return (
    <main className="mt-40">
      <section className="wrapper max-w-[1240px] mx-auto">
        <OverlapHeader
          title="Pending comments"
          overlapTitle="before:content-['comments']"
        />

        <div className="grid grid-cols-2 gap-8 mt-24">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </section>
    </main>
  )
}

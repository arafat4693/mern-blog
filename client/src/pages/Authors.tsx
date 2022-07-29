import OverlapHeader from "../components/layouts/OverlapHeader"
import AuthorCard from "../components/authorPage/AuthorCard"

export default function Authors() {
  return (
    <main className="mt-40">
      <section className="wrapper max-w-[1240px] mx-auto">
        <OverlapHeader
          title="All authors"
          overlapTitle="before:content-['authors']"
        />

        <div className="grid grid-cols-6 gap-6 mt-24">
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
          <AuthorCard />
        </div>
      </section>
    </main>
  )
}

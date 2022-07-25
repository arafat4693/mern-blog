import AboutAuthor from "../components/authorPage/AboutAuthor"
import SrcResults from "../components/searchPage/SrcResults"

export default function Author() {
  return (
    <main>
      <section className="wrapper max-w-[1240px] mx-auto">
        <AboutAuthor />

        <div className="grid grid-cols-3 gap-16 mb-20">
          <SrcResults />
        </div>
      </section>
    </main>
  )
}

import RecentPosts from "../components/aboutPage/RecentPosts"
import UserInfo from "../components/aboutPage/UserInfo"

export default function About() {
  return (
    <main>
      <section className="wrapper max-w-[1240px] mx-auto">
        <UserInfo />
        <RecentPosts />
      </section>
    </main>
  )
}

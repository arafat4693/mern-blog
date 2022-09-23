import { useSelector } from "react-redux"
import RecentPosts from "../components/aboutPage/RecentPosts"
import UserInfo from "../components/aboutPage/UserInfo"
import ErrMsg from "../components/layouts/ErrMsg"
import { RootState } from "../redux/store"

export default function About() {
  const { user } = useSelector((state: RootState) => state.user)

  if (user === null) return <ErrMsg msg="Login to see your about page" />

  return (
    <section className="wrapper max-w-[1240px] mx-auto px-14 xl:px-0">
      <UserInfo user={user} />
      <RecentPosts userId={user._id} />
    </section>
  )
}

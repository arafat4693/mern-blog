import Navbar from "../components/layouts/Navbar"
import PageHeader from "../components/layouts/PageHeader"
import { Outlet } from "react-router-dom"
import NewsLetter from "../components/layouts/NewsLetter"
import Footer from "../components/layouts/Footer"
import FixedHeader from "../components/layouts/FixedHeader"
import UpBtn from "../components/layouts/UpBtn"

export default function Layout() {
  return (
    <>
      <FixedHeader />
      <PageHeader />
      <Navbar />
      <Outlet />
      <NewsLetter />
      <Footer />
      <UpBtn />
    </>
  )
}

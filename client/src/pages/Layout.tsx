import Navbar from "../components/layouts/Navbar"
import PageHeader from "../components/layouts/PageHeader"
import { Outlet } from "react-router-dom"
import NewsLetter from "../components/homePage/NewsLetter"

export default function Layout() {
  return (
    <>
      <PageHeader />
      <Navbar />
      <Outlet />
      <NewsLetter />
    </>
  )
}

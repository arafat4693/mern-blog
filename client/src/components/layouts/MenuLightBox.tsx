import { XIcon } from "@heroicons/react/outline"
import Logo from "./Logo"
import MenuCard from "./MenuCard"
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs"
import { Dispatch } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

interface Props {
  closeMenu: boolean
  setCloseMenu: Dispatch<boolean>
}

export default function MenuLightBox({ closeMenu, setCloseMenu }: Props) {
  const { articles } = useSelector((state: RootState) => state.article)

  function closeLbx(e: any): void {
    const lb = e.target.classList.contains("lightBox")
    if (!lb) return
    setCloseMenu(true)
  }

  return (
    <div
      className={`lightBox z-10 w-screen h-screen fixed top-0 left-0 bg-gray-700/60 backdrop-blur-sm transition-all ease-in-out duration-300 ${
        closeMenu ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
      onClick={closeLbx}
    >
      <div
        className={`bg-white w-[44rem] max-w-[90%] h-screen px-8 py-12 relative transition-all ease-in-out duration-300 overflow-scroll hideScrollBar ${
          closeMenu ? "-translate-x-[110%]" : "translate-x-0"
        }`}
      >
        <XIcon
          onClick={() => setCloseMenu(true)}
          className="w-14 h-14 absolute stroke-gray-400 top-4 right-4 cursor-pointer transition-all duration-200 hover:rotate-180"
        />

        <Logo customStyle="text-6xl pb-10" />

        {articles.slice(8, 12).map((a, idx) => (
          <MenuCard
            key={a._id}
            article={a}
            last={idx === 3}
            setCloseMenu={setCloseMenu}
          />
        ))}

        <div className="flex gap-2 mt-20">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
          >
            <BsFacebook />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
          >
            <BsTwitter />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
          >
            <BsYoutube />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
          >
            <BsInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

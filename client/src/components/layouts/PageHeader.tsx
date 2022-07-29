import Logo from "./Logo"
import { ChatAltIcon, SearchIcon } from "@heroicons/react/outline"
import SrcLightBox from "./SrcLightBox"
import { useState } from "react"
import MenuLightBox from "./MenuLightBox"
// import { MdMessage } from "react-icons/md"
import { Link } from "react-router-dom"

export default function PageHeader() {
  const [closeSrc, setCloseSrc] = useState<boolean>(true)
  const [closeMenu, setCloseMenu] = useState<boolean>(true)

  return (
    <header className="py-14">
      <div className="wrapper max-w-[1240px] mx-auto flex items-center justify-between">
        <div
          className="burgerMenu w-12 cursor-pointer"
          onClick={() => setCloseMenu(false)}
        >
          <div className="bar relative w-full h-[0.24rem] bg-gray-800"></div>
          <div className="bar relative w-full h-1 bg-gray-800 my-3 before:delay-100"></div>
          <div className="bar relative w-full h-[0.24rem] bg-gray-800 before:delay-150"></div>
        </div>

        <Logo customStyle="text-6xl" />

        <div className="flex gap-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
            onClick={() => setCloseSrc(false)}
          >
            <SearchIcon className="w-7 h-7 stroke-gray-200" />
          </div>
          <Link
            to="/comments"
            className="w-14 h-14 relative rounded-full flex items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
          >
            <ChatAltIcon className="w-7 h-7 stroke-gray-200" />
            <span className="min-w-[1.5rem] h-6 p-1 flex justify-center items-center absolute -top-2.5 -right-1 rounded-full bg-yellow-300 text-gray-800 text-base font-medium">
              10
            </span>
          </Link>
        </div>

        <SrcLightBox closeSrc={closeSrc} setCloseSrc={setCloseSrc} />
        <MenuLightBox closeMenu={closeMenu} setCloseMenu={setCloseMenu} />
      </div>
    </header>
  )
}

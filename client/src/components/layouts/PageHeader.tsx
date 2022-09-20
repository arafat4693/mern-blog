import Logo from "./Logo"
import {
  BookmarkAltIcon,
  ChatAltIcon,
  LoginIcon,
  LogoutIcon,
  SearchIcon,
} from "@heroicons/react/outline"
import SrcLightBox from "./SrcLightBox"
import { useState } from "react"
import MenuLightBox from "./MenuLightBox"
import { Link } from "react-router-dom"
import AuthLightBox from "./AuthLightBox"
import type { AppDispatch, RootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import axios from "../../utils/axiosConfig"
import { toast } from "react-toastify"
import { addUser } from "../../redux/userSlice"

export default function PageHeader() {
  const [closeSrc, setCloseSrc] = useState<boolean>(true)
  const [closeMenu, setCloseMenu] = useState<boolean>(true)
  const [closeAuth, setCloseAuth] = useState<boolean>(true)
  const { user } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch<AppDispatch>()

  async function logout() {
    // window.open("http://localhost:5000/auth/logout", "_self")
    try {
      const res = await axios.get("/auth/logout")
      toast(res.data.message, { type: "success", autoClose: 2300 })
      dispatch(addUser(null))
    } catch (err: any) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      toast(message, { type: "error", autoClose: 2300 })
    }
  }

  return (
    <header className="py-14 px-14 xl:px-0">
      <div className="wrapper max-w-[1240px] mx-auto flex items-center justify-between">
        <div
          className="burgerMenu sm:w-12 w-10 cursor-pointer"
          onClick={() => setCloseMenu(false)}
        >
          <div className="bar relative w-full h-[0.24rem] bg-gray-800"></div>
          <div className="bar relative w-full h-1 bg-gray-800 my-3 before:delay-100"></div>
          <div className="bar relative w-full h-[0.24rem] bg-gray-800 before:delay-150"></div>
        </div>

        <Logo customStyle="text-5xl sm:text-6xl" />

        <div className="flex gap-3">
          <button
            className="tooltip relative w-14 h-14 rounded-full flex items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
            onClick={() => setCloseSrc(false)}
            data-title="Search"
          >
            <SearchIcon className="w-7 h-7 stroke-gray-200" />
          </button>

          {user ? (
            <>
              <Link
                to="/comments"
                data-title="Pending comments"
                className="tooltip hidden w-14 h-14 relative rounded-full items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
              >
                <ChatAltIcon className="w-7 h-7 stroke-gray-200" />
                <span className="min-w-[1.5rem] h-6 p-1 flex justify-center items-center absolute -top-2.5 -right-1 rounded-full bg-yellow-300 text-gray-800 text-base font-medium">
                  10
                </span>
              </Link>
              <Link
                to="/bookmark"
                data-title="Your bookmarked"
                className="tooltip flex w-14 h-14 relative rounded-full items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
              >
                <BookmarkAltIcon className="w-7 h-7 stroke-gray-200" />
              </Link>
              <button
                data-title="Logout"
                onClick={logout}
                className="tooltip relative w-14 h-14 rounded-full flex items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
              >
                <LogoutIcon className="w-7 h-7 stroke-gray-200" />
              </button>
            </>
          ) : (
            <button
              data-title="Login"
              onClick={() => setCloseAuth(false)}
              className="tooltip relative w-14 h-14 rounded-full flex items-center justify-center bg-violet-600 cursor-pointer shadow-md shadow-violet-300"
            >
              <LoginIcon className="w-7 h-7 stroke-gray-200" />
            </button>
          )}
        </div>

        <SrcLightBox closeSrc={closeSrc} setCloseSrc={setCloseSrc} />
        <MenuLightBox closeMenu={closeMenu} setCloseMenu={setCloseMenu} />
        <AuthLightBox closeAuth={closeAuth} setCloseAuth={setCloseAuth} />
      </div>
    </header>
  )
}

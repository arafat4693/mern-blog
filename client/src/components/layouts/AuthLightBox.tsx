import { Dispatch, useRef, useState } from "react"
import { BsGithub, BsGoogle, BsTwitter } from "react-icons/bs"
import Login from "./Login"
import Register from "./Register"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../redux/store"
import { toast } from "react-toastify"
import { resetState } from "../../redux/userSlice"

interface Props {
  closeAuth: boolean
  setCloseAuth: Dispatch<boolean>
}

export default function AuthLightBox({ closeAuth, setCloseAuth }: Props) {
  const [move, setMove] = useState<boolean>(false)
  const { userSuccess, userError, userMessage, userAction } = useSelector(
    (state: RootState) => state.user
  )
  const dispatch = useDispatch()
  const authDiv = useRef<any>()

  useEffect(() => {
    if (userSuccess) toast(userMessage, { type: "success", autoClose: 2300 })
    if (userError) toast(userMessage, { type: "error", autoClose: 2300 })
    if (userSuccess && userAction === "REGISTER") setMove(false)
    dispatch(resetState())
  }, [userSuccess, userError, userMessage, userAction, dispatch, setMove])

  function closeLbx(e: any): void {
    const lb = e.target.classList.contains("lightBox")
    if (!lb) return
    setCloseAuth(true)
  }
  function githubLogin() {
    window.open("https://mern-blog-server.onrender.com/auth/github", "_self")
  }
  function googleLogin() {
    window.open("https://mern-blog-server.onrender.com/auth/google", "_self")
  }
  function twitterLogin() {
    window.open("https://mern-blog-server.onrender.com/auth/twitter", "_self")
  }

  return (
    <div
      onClick={closeLbx}
      className={`lightBox z-10 w-screen h-screen fixed top-0 left-0 bg-gray-700/60 backdrop-blur-sm transition-all ease-in-out duration-300 flex justify-center items-center ${
        closeAuth ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div
        ref={authDiv}
        className={`bg-white h-auto max-h-[95vh] w-[40rem] max-w-[95%] rounded-lg transition-all ease-in-out duration-500 overflow-scroll hideScrollBar py-7 ${
          closeAuth ? "-translate-y-[10rem]" : "translate-y-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-7">
          <button
            onClick={googleLogin}
            className="bg-red-600 flex items-center gap-6 text-2xl text-white tracking-wide py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-red-300 transition-all duration-300"
          >
            <BsGoogle className="text-4xl" /> Continue with Google
          </button>

          <button
            onClick={twitterLogin}
            className="bg-sky-600 flex items-center gap-6 text-2xl text-white tracking-wide py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-sky-300 transition-all duration-300"
          >
            <BsTwitter className="text-4xl" /> Continue with Twitter
          </button>

          <button
            onClick={githubLogin}
            className="bg-gray-800 flex items-center gap-6 text-2xl text-white tracking-wide py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-gray-300 transition-all duration-300"
          >
            <BsGithub className="text-4xl" /> Continue with Github
          </button>
        </div>

        <h3 className="text-xl px-7 mt-6 mb-3 flex items-center gap-2 uppercase text-gray-800 font-medium tracking-wide before:content-[''] before:w-full before:h-1 before:rounded-lg before:bg-gray-700 after:content-[''] after:w-full after:h-1 after:rounded-lg after:bg-gray-700">
          or
        </h3>

        <div
          className={`flex items-center translate-all duration-300 w-[200%] ${
            move ? "h-[38.65rem]" : "h-[22.65rem]"
          }`}
        >
          <Login
            move={move}
            setMove={setMove}
            setCloseAuth={setCloseAuth}
            closeAuth={closeAuth}
          />
          <Register move={move} setMove={setMove} closeAuth={closeAuth} />
        </div>
      </div>
    </div>
  )
}

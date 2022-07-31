import { Dispatch } from "react"
import { BsGithub, BsGoogle, BsTwitter } from "react-icons/bs"

interface Props {
  closeAuth: boolean
  setCloseAuth: Dispatch<boolean>
}

export default function AuthLightBox({ closeAuth, setCloseAuth }: Props) {
  function closeLbx(e: any): void {
    const lb = e.target.classList.contains("lightBox")
    if (!lb) return
    setCloseAuth(true)
  }
  function githubLogin() {
    window.open("http://localhost:5000/auth/github", "_self")
  }
  function googleLogin() {
    window.open("http://localhost:5000/auth/google", "_self")
  }
  function twitterLogin() {
    window.open("http://localhost:5000/auth/twitter", "_self")
  }
  return (
    <div
      onClick={closeLbx}
      className={`lightBox z-10 w-screen h-screen fixed top-0 left-0 bg-gray-700/60 backdrop-blur-sm transition-all ease-in-out duration-300 flex justify-center items-center ${
        closeAuth ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div
        className={`bg-white flex flex-col gap-4 w-[40rem] p-8 rounded-lg relative transition-all ease-in-out duration-500 overflow-scroll hideScrollBar ${
          closeAuth ? "-translate-y-[10rem]" : "translate-y-0"
        }`}
      >
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
    </div>
  )
}

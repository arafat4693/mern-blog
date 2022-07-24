import { IoIosArrowUp } from "react-icons/io"
import { useEffect, useState } from "react"
import { Link } from "react-scroll"

export default function UpBtn() {
  const [fix, setFix] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setFix(true)
      } else {
        setFix(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY >= 300) {
          setFix(true)
        } else {
          setFix(false)
        }
      })
    }
  }, [])

  return (
    <Link to="app" spy={true} smooth={true} offset={0} duration={700}>
      <button
        className={`fixed ${
          fix ? "bottom-12" : "-bottom-full"
        } right-12 w-20 h-20 bg-gray-800 text-white font-semibold flex items-center justify-center text-4xl rounded-xl transition-all duration-500 ease-in-out hover:bg-violet-800 hover:shadow-lg hover:shadow-violet-500`}
      >
        <IoIosArrowUp />
      </button>
    </Link>
  )
}

import Logo from "./Logo"
import NavItem from "./NavItem"
import { useEffect, useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function FixedHeader() {
  const [fix, setFix] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 400) {
        setFix(true)
      } else {
        setFix(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY >= 400) {
          setFix(true)
        } else {
          setFix(false)
        }
      })
    }
  }, [])

  return (
    <section
      className={`fixed ${
        fix ? "top-0" : "-top-full"
      } left-0 shadow-xl shadow-gray-700/10 transition-all duration-700 ease-in-out z-[5] bg-white w-full py-8 xl:px-0 px-14`}
    >
      <div className="wrapper max-w-[1240px] mx-auto flex items-center justify-between">
        <Logo customStyle="text-5xl sm:text-6xl" />
        <AiOutlineMenu
          className="text-5xl text-gray-800 cursor-pointer block sm:hidden"
          onClick={() => setOpenModal(true)}
        />
        <div className="sm:flex gap-4 hidden">
          <NavItem title="Home" location="/" />
          <NavItem title="About" location="/about" />
          <NavItem title="Write" location="/write" />
          <NavItem title="Authors" location="/authors" />
          <NavItem title="Contact" location="/contact" />
        </div>
      </div>

      <div
        className={`fixed bg-violet-700 top-0 right-0 w-screen h-screen ${
          openModal ? "opacity-100 visible" : "opacity-0 invisible"
        } transition-all duration-300 flex items-center`}
      >
        <AiOutlineClose
          className="text-5xl text-white cursor-pointer top-8 right-11 absolute"
          onClick={() => setOpenModal(false)}
        />
        <div className="ml-28 flex flex-col gap-11">
          <Link
            to="/"
            onClick={() => setOpenModal(false)}
            className="text-5xl text-white text-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpenModal(false)}
            className="text-5xl text-white text-bold"
          >
            About
          </Link>
          <Link
            to="/write"
            onClick={() => setOpenModal(false)}
            className="text-5xl text-white text-bold"
          >
            Write
          </Link>
          <Link
            to="/authors"
            onClick={() => setOpenModal(false)}
            className="text-5xl text-white text-bold"
          >
            Authors
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpenModal(false)}
            className="text-5xl text-white text-bold"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}

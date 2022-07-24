import Logo from "./Logo"
import NavItem from "./NavItem"
import { useEffect, useState } from "react"

export default function FixedHeader() {
  const [fix, setFix] = useState(false)

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
      } left-0 shadow-xl shadow-gray-700/10 transition-all duration-700 ease-in-out z-[2] bg-white w-full py-8`}
    >
      <div className="wrapper max-w-[1240px] mx-auto flex items-center justify-between">
        <Logo customStyle="text-6xl" />
        <div className="flex gap-4">
          <NavItem title="Home" location="/" />
          <NavItem title="About" location="/about" />
          <NavItem title="Write" location="/write" />
          <NavItem title="Search" location="/search" />
          <NavItem title="Contact" location="/contact" />
        </div>
      </div>
    </section>
  )
}

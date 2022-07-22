import { NavLink } from "react-router-dom"

interface ItemProps {
  title: string
  location: string
}

function NavItem({ title, location }: ItemProps) {
  return (
    <NavLink
      to={location}
      className={({ isActive }) => (isActive ? "activeLink" : "normalLink")}
    >
      {title}
    </NavLink>
  )
}

export default function Navbar() {
  return (
    <nav className="flex justify-center my-6">
      <div className="flex gap-4">
        <NavItem title="Home" location="/" />
        <NavItem title="About" location="/about" />
        <NavItem title="Write" location="/write" />
        <NavItem title="Search" location="/search" />
        <NavItem title="Contact" location="/contact" />
      </div>
    </nav>
  )
}

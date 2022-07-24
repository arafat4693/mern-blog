import { NavLink } from "react-router-dom"

interface ItemProps {
  title: string
  location: string
}

export default function NavItem({ title, location }: ItemProps) {
  return (
    <NavLink
      to={location}
      className={({ isActive }) => (isActive ? "activeLink" : "normalLink")}
    >
      {title}
    </NavLink>
  )
}

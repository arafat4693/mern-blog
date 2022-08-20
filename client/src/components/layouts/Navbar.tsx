import NavItem from "./NavItem"

export default function Navbar() {
  return (
    <nav className="flex justify-center my-6">
      <div className="flex gap-4">
        <NavItem title="Home" location="/" />
        <NavItem title="About" location="/about" />
        <NavItem title="Write" location="/write" />
        <NavItem title="Authors" location="/authors" />
        <NavItem title="Search" location="/search" />
        <NavItem title="Contact" location="/contact" />
      </div>
    </nav>
  )
}

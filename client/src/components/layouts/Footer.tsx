import { Link } from "react-router-dom"
import Logo from "./Logo"
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs"
import UnderlineHeader from "../layouts/UnderlineHeader"

interface Props {
  title: string
  location: string
}

function FooterLink({ title, location }: Props) {
  return (
    <Link
      to={location}
      className="text-2xl text-gray-500 hover:text-violet-700 mt-6 block capitalize"
    >
      {title}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="xl:pb-32 pb-20 px-14 xl:px-0">
      <div className="wrapper max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
        <div className="copyright">
          <Logo customStyle="text-5xl" />
          <p className="text-2xl text-gray-500 leading-normal my-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
            nesciunt amet.
          </p>

          <p className="text-2xl text-gray-400 font-medium">
            © 2021, All Rights Reserved.
          </p>
        </div>

        <div className="quickLinks">
          <UnderlineHeader title="quick links" />
          <FooterLink title="Contact" location="/contact" />
          <FooterLink title="About" location="/about" />
          <FooterLink title="Search" location="/search/title/s" />
        </div>

        <div className="categoryLinks">
          <UnderlineHeader title="category" />
          <FooterLink
            title="entertainment"
            location="/search/categories/entertainment"
          />
          <FooterLink
            title="illustration"
            location="/search/categories/illustration"
          />
          <FooterLink title="health" location="/search/categories/health" />
          <FooterLink
            title="life style"
            location="/search/categories/life style"
          />
        </div>

        <div className="follow">
          <UnderlineHeader title="follow us" />

          <div className="flex gap-2 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
            >
              <BsFacebook />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
            >
              <BsTwitter />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
            >
              <BsYoutube />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-800 text-3xl text-white"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

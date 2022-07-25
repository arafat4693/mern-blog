import TooltipIcon from "./TooltipIcon"
import {
  FaGlobeEurope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"

export default function AboutAuthor() {
  return (
    <section className="border border-solid border-gray-300 rounded-3xl p-16 my-20 flex items-center gap-32">
      <img
        src="/images/user.jpg"
        alt="user"
        className="min-w-[13rem] w-52 h-52 object-cover rounded-full"
      />
      <div>
        <p className="text-xl text-gray-500 capitalize mb-3">Author</p>
        <h2 className="text-6xl text-gray-800 font-medium border-0 border-b-2 border-solid border-gray-800 pb-3">
          Alice
        </h2>
        <p className="my-10 text-2xl text-gray-500 leading-relaxed">
          My name is Alice, I am so happy, my dear friend, so absorbed in the
          exquisite sense of mere tranquil existence, that I neglect my talents.
          I should be incapable of drawing a single stroke at the present
          moment; and yet I feel that I never was a greater artist than now.
        </p>
        <div className="flex justify-between items-center">
          <div className="icons flex gap-8 items-center">
            <TooltipIcon
              Icon={FaGlobeEurope}
              tooltip="Website: https://themeforest.net/user/rivaxstudio"
              link="https://www.themeforest.net"
            />
            <TooltipIcon
              Icon={FaFacebookF}
              tooltip="Follow me on facebook"
              link="https://www.facebook.com"
            />
            <TooltipIcon
              Icon={FaTwitter}
              tooltip="Follow me on twitter"
              link="https://www.twitter.com"
            />
            <TooltipIcon
              Icon={FaLinkedinIn}
              tooltip="Follow me on linkedin"
              link="https://www.linkedin.in"
            />
            <TooltipIcon
              Icon={IoLogoWhatsapp}
              tooltip="Follow me on whatsapp"
              link="https://www.whatsapp.com"
            />
            <TooltipIcon
              Icon={AiFillInstagram}
              tooltip="Follow me on instagram"
              link="https://www.instagram.com"
            />
          </div>
          <span className="block text-right text-xl text-gray-500 capitalize">
            15 articles
          </span>
        </div>
      </div>
    </section>
  )
}

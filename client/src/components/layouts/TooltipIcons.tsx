import TooltipIcon from "./TooltipIcon"
import {
  FaGlobeEurope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { AiFillInstagram } from "react-icons/ai"

export default function TooltipIcons() {
  return (
    <div className="icons flex flex-wrap gap-8 items-center bg-gray-200/40 rounded-full px-10 py-4 w-fit">
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
  )
}

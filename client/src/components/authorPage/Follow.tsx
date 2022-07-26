import UnderlineHeader from "../layouts/UnderlineHeader"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

interface Props {
  title: string
  Icon: any
  location: string
}

function FollowMe({ title, Icon, location }: Props) {
  return (
    <a href={location} target="_blank" rel="noreferrer" className="mt-6 block">
      <Icon className="text-2xl text-gray-700 mb-3 ml-1.5" />
      <h1 className="capitalize text-2xl text-gray-700">{title}</h1>
    </a>
  )
}

export default function Follow() {
  return (
    <div className="mb-20">
      <UnderlineHeader title="follow me" />
      <div className="mt-12">
        <FollowMe
          title="facebook"
          Icon={FaFacebookF}
          location="https://www.facebook.com"
        />
        <FollowMe
          title="twitter"
          Icon={FaTwitter}
          location="https://www.twitter.com"
        />
        <FollowMe
          title="linkedin"
          Icon={FaLinkedinIn}
          location="https://www.linkedin.com"
        />
        <FollowMe
          title="instagram"
          Icon={AiFillInstagram}
          location="https://www.instagram.com"
        />
      </div>
    </div>
  )
}

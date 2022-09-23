import { useRef, useState } from "react"
import { FiCopy } from "react-icons/fi"
import {
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share"
import { FacebookIcon } from "react-share"
import { MongoArticle } from "../../utils/types"

interface Props {
  article: MongoArticle | undefined
}

const TITLE = "Furify blogs"
const SIZE = 42
const URL = "https://www.google.com"
const STYLE =
  "shadow-xl rounded-full hover:translate-y-4 translate-y-0 transition-all duration-300 ease-in"

export default function Share({ article }: Props) {
  const inputRef = useRef<any>()
  const [copy, setCopy] = useState<boolean>(false)

  async function copyToClipboard() {
    if (copy) return
    setCopy(true)

    const copyText = inputRef.current
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    await navigator.clipboard.writeText(copyText.value)

    setTimeout(() => setCopy(false), 2000)
  }

  return (
    <div className="flex flex-col items-center gap-8 border-0 border-y border-solid border-gray-300 py-20">
      <h1 className="text-4xl font-semibold text-gray-800 capitalize">
        share article
      </h1>

      <div className="flex gap-3 flex-wrap">
        <FacebookShareButton quote={TITLE} url={URL} className={STYLE}>
          <FacebookIcon size={SIZE} round={true} />
        </FacebookShareButton>

        <TwitterShareButton title={TITLE} url={URL} className={STYLE}>
          <TwitterIcon size={SIZE} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton title={TITLE} url={URL} className={STYLE}>
          <WhatsappIcon size={SIZE} round={true} />
        </WhatsappShareButton>

        <LinkedinShareButton
          title={TITLE}
          url={URL}
          className={STYLE}
          summary={article?.description}
        >
          <LinkedinIcon size={SIZE} round={true} />
        </LinkedinShareButton>

        <PinterestShareButton
          url={URL}
          className={STYLE}
          media={article?.thumbnailImg || ""}
          description={article?.description}
        >
          <PinterestIcon size={SIZE} round={true} />
        </PinterestShareButton>

        <TelegramShareButton title={TITLE} url={URL} className={STYLE}>
          <TelegramIcon size={SIZE} round={true} />
        </TelegramShareButton>

        <RedditShareButton title={TITLE} url={URL} className={STYLE}>
          <RedditIcon size={SIZE} round={true} />
        </RedditShareButton>
      </div>

      <div className="max-w-full w-[50rem] flex gap-4 items-center py-4 px-6 rounded-lg bg-gray-200/40 mt-2">
        <input
          ref={inputRef}
          type="text"
          value="https://demo.rivaxstudio.com/kayleen/what-to-think-about-when-everything-goes-wrong/"
          className="w-full text-xl text-gray-600 bg-transparent"
          readOnly={true}
        />
        <button className="relative">
          <FiCopy
            className="text-4xl text-violet-700"
            onClick={copyToClipboard}
          />
          <span
            className={`${
              copy ? "visible opacity-100" : "invisible opacity-0"
            } transition-all duration-300 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-20 bg-gray-900 rounded-lg text-xl text-white py-2 px-4 whitespace-nowrap`}
          >
            Link Copied!
          </span>
        </button>
      </div>
    </div>
  )
}

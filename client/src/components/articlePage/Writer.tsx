import { useCallback, useMemo } from "react"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { AppDispatch } from "../../redux/store"
import { followAuthor } from "../../redux/userSlice"
import axios from "../../utils/axiosConfig"
import { MongoArticle, MongoUser } from "../../utils/types"
import { formateImg, getErrMsg } from "../../utils/utilFunctions"
import TooltipIcons from "../layouts/TooltipIcons"

interface Props {
  articleUser: undefined | MongoUser
  user: null | MongoUser
  article: undefined | MongoArticle
}

export default function Writer({ articleUser, user, article }: Props) {
  const dispatch = useDispatch<AppDispatch>()

  const userFollowing = useMemo(
    () => new Set(user?.following),
    [user?.following]
  )

  const isFollowing = userFollowing.has(article?.writerId as string)

  const onFollow = useCallback(async () => {
    if (user === null || article === undefined) return
    try {
      const res = await axios(`/user/${user._id}/follow`, {
        method: "PUT",
        data: {
          authorId: article.writerId,
          isFollowing: userFollowing.has(article.writerId),
        },
      })
      dispatch(
        followAuthor({
          authorId: res.data.authorId,
          isFollowing: res.data.isFollowing,
        })
      )
    } catch (err: any) {
      const message = getErrMsg(err)
      toast(message, { type: "error", autoClose: 2300 })
    }
  }, [user, article, dispatch, userFollowing])

  return (
    <div className="py-20 flex flex-col sm:flex-row items-center gap-16">
      <img
        src={formateImg(articleUser?.imgUrl)}
        alt="user"
        className="min-w-[12rem] w-48 h-48 object-cover rounded-full shadow-xl"
      />
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl tracking-wider uppercase text-gray-500 mb-3">
              written by
            </p>
            <h2 className="text-4xl text-gray-800 font-semibold">
              {articleUser?.displayName}
            </h2>
          </div>
          {user && user._id !== (article?.writerId as string) && (
            <button
              onClick={onFollow}
              className={`py-3 px-6 border-2 border-solid ${
                isFollowing
                  ? "border-violet-700 text-violet-700"
                  : "bg-violet-700 text-white"
              } capitalize text-xl font-medium tracking-wide rounded-full`}
            >
              {isFollowing ? "following" : "follow"}
            </button>
          )}
        </div>
        <p className="my-8 text-2xl text-gray-500 leading-relaxed">
          My name is {articleUser?.displayName}, I am so happy, my dear friend,
          so absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present
        </p>
        <TooltipIcons />
      </div>
    </div>
  )
}

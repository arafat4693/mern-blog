import axios from "../utils/axiosConfig"
import { ArticleData } from "../utils/types"
import { v4 } from "uuid"
import imgUpload from "../utils/imgUpload"

async function createArticle(url: string, articleData: ArticleData) {
  const thumbnailImgName = v4()
  const thumbnailImg = await imgUpload(
    articleData.thumbnail[0],
    thumbnailImgName
  )
  const { thumbnail, ...other } = articleData
  const res = await axios.post(url, {
    ...other,
    thumbnailImgName,
    thumbnailImg,
  })
  return res.data
}

const articleServices = { createArticle }
export default articleServices

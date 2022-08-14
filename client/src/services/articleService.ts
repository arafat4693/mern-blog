import axios from "../utils/axiosConfig"
import { ArticleData, MongoArticle, UpdateArticle } from "../utils/types"
import { v4 } from "uuid"
import imgUpload from "../utils/imgUpload"
import deleteImage from "../utils/deleteImg"

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

async function allArticles(url: string) {
  const res = await axios.get(url)
  return res.data
}

async function deleteArticle(url: string, article: MongoArticle) {
  // await deleteImage(article.thumbnailImgName)
  // const res = await axios.delete(url)
  const res = await Promise.all([
    axios.delete(url),
    deleteImage(article.thumbnailImgName),
  ])
  return res[0].data
}

async function updateArticle(url: string, articleData: UpdateArticle) {
  let thumbnailImg = articleData.thumbnailImg

  if (articleData.thumbnail[0]) {
    thumbnailImg = (await imgUpload(
      articleData.thumbnail[0],
      articleData.thumbnailImgName
    )) as string
  }

  const { thumbnail, ...other } = articleData
  const res = await axios.put(url, {
    ...other,
    thumbnailImg,
  })
  return res.data
}

const articleServices = {
  createArticle,
  allArticles,
  deleteArticle,
  updateArticle,
}
export default articleServices

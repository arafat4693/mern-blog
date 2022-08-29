import asyncHandler from "express-async-handler"
import ArticleModel from "../models/articleModel.js"
import MessageModel from "../models/messageModel.js"

// @desc   get articles
// @route  GET article/
// @access Public
export const getArticles = asyncHandler(async (req, res) => {
  const allArticles = await ArticleModel.find()
  res.status(200).json(allArticles)
})

// @desc   get one article
// @route  GET article/:slug
// @access Public
export const getArticle = asyncHandler(async (req, res) => {
  const { slug } = req.params
  const article = await ArticleModel.findOne({ slug })
  res.status(200).json(article)
})

// @desc   create article
// @route  POST article/:userId
// @access Private
export const createArticle = asyncHandler(async (req, res) => {
  let article = new ArticleModel(req.body)
  article = await article.save()
  res.status(201).json({ article, message: "Successfully created" })
})

// @desc   update article
// @route  PUT article/:userId
// @access Private
export const updateArticle = asyncHandler(async (req, res) => {
  const {
    articleId,
    title,
    description,
    thumbnailImg,
    thumbnailImgName,
    tags,
    categories,
    markdown,
  } = req.body
  let article = await ArticleModel.findOne({ _id: articleId })

  article.title = title
  article.description = description
  article.thumbnailImg = thumbnailImg
  article.thumbnailImgName = thumbnailImgName
  article.tags = tags
  article.categories = categories
  article.markdown = markdown
  article = await article.save()

  res.status(200).json({ article, message: "Successfully updated" })
})

// @desc   delete article
// @route  DELETE article/:userId/:articleId
// @access Private
export const deleteArticle = asyncHandler(async (req, res) => {
  const { articleId } = req.params
  // await ArticleModel.deleteOne({ _id: articleId })
  await Promise.all([
    ArticleModel.deleteOne({ _id: articleId }),
    MessageModel.deleteMany({ articleId }),
  ])
  res.status(200).json({ articleId, message: "Successfully deleted" })
})

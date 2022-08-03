import asyncHandler from "express-async-handler"
import ArticleModel from "../models/articleModel.js"

// @desc   create article
// @route  POST article/:userId
// @access Private
export const createArticle = asyncHandler(async (req, res) => {
  let newArticle = new ArticleModel(req.body)
  newArticle = await newArticle.save()
  res.status(201).json({ newArticle, message: "successfully created" })
})

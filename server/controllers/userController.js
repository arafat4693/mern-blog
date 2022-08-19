import asyncHandler from "express-async-handler"
import UserModel from "../models/userModel.js"

// @desc   all users
// @route  GET user/
// @access Public
export const allUsers = asyncHandler(async (req, res) => {
  const allUsers = await UserModel.find(
    {},
    {
      displayName: 1,
      imgName: 1,
      imgUrl: 1,
      followers: 1,
      following: 1,
      createdAt: 1,
      updatedAt: 1,
    }
  )
  res.status(200).json(allUsers)
})

// @desc   bookmark or unbookmark article
// @route  PUT user/:userId/bookmark
// @access Private
export const bookmarkArticle = asyncHandler(async (req, res) => {
  const { articleId, isBookmark } = req.body
  const { userId } = req.params
  if (isBookmark) {
    await UserModel.updateOne(
      { _id: userId },
      { $pull: { bookmarked: articleId } }
    )
  } else {
    await UserModel.updateOne(
      { _id: userId },
      { $push: { bookmarked: articleId } }
    )
  }
  res.status(200).json(req.body)
})

import asyncHandler from "express-async-handler"
import MessageModel from "../models/messageModel.js"

// @desc   article messages
// @route  GET message/:articleId
// @access Public
export const articleMessages = asyncHandler(async (req, res) => {
  const { articleId } = req.params
  const articleMessages = await MessageModel.find({ articleId }).sort({
    createdAt: "desc",
  })
  res.status(200).json(articleMessages)
})

// @desc   create message
// @route  POST message/:userId
// @access Private
export const newMessage = asyncHandler(async (req, res) => {
  let newMessage = new MessageModel(req.body)
  newMessage = await newMessage.save()
  res.status(201).json(newMessage)
})

// @desc   update message
// @route  PUT message/:userId
// @access Private
export const updateMessage = asyncHandler(async (req, res) => {
  const { messageId, message } = req.body
  const updatedMessage = await MessageModel.findByIdAndUpdate(
    messageId,
    { $set: { message } },
    { new: true }
  )
  res.status(200).json(updatedMessage)
})

// @desc   delete message
// @route  DELETE message/:userId/:messageId
// @access Private
export const deleteMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.params
  await Promise.all([
    MessageModel.deleteOne({ _id: messageId }),
    MessageModel.deleteMany({ parentId: messageId }),
  ])
  res.status(200).json(messageId)
})

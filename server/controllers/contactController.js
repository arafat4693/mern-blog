import asyncHandler from "express-async-handler"
import ContactModel from "../models/contactModel.js"

// @desc   send a message
// @route  POST contact/:userId
// @access Private
export const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    res.status(400)
    throw new Error("All fields are required!")
  }
  const newMessage = new ContactModel({
    ...req.body,
    sender: req.params.userId,
  })
  await newMessage.save()
  res.status(201).json("Successfully sended!")
})

import asyncHandler from "express-async-handler"
import UserModel from "../models/userModel.js"
import bcrypt from "bcrypt"

// @desc   Register user
// @route  POST auth/register
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, imgName, imgUrl } = req.body

  if (!username || !email || !password) {
    res.status(400)
    throw new Error("Please fill out all the input fields")
  }

  const checkUser = await UserModel.findOne({ $or: [{ email }, { username }] })
  if (checkUser && checkUser.email === email) {
    res.status(403)
    throw new Error("User already exists")
  }
  if (checkUser && checkUser.username === username) {
    res.status(403)
    throw new Error("Username already exists")
  }

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  const createUser = {
    username,
    email,
    password: hash,
  }

  if (imgUrl) {
    createUser.imgName = imgName
    createUser.imgUrl = imgUrl
  }

  let newUser = new UserModel(createUser)
  newUser = await newUser.save()
  res.status(201).json({ newUser, message: "Successfully registered" })
})

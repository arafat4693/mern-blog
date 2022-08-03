import express from "express"
import { createArticle } from "../controllers/articleController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.route("/:userId").post(verifyUser, createArticle)

export default router

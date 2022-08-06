import express from "express"
import {
  createArticle,
  deleteArticle,
  getArticles,
  updateArticle,
} from "../controllers/articleController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router
  .route("/:userId")
  .post(verifyUser, createArticle)
  .get(verifyUser, getArticles)
  .put(verifyUser, updateArticle)

router.route("/:userId/:articleId").delete(verifyUser, deleteArticle)

export default router

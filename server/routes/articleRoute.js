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
  .put(verifyUser, updateArticle)

router.get("/", getArticles)
router.delete("/:userId/:articleId", verifyUser, deleteArticle)

export default router

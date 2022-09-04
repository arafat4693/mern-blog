import express from "express"
import {
  bookmarkArticle,
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  getBookmarked,
  mostBookmarked,
  randomArticles,
  recentArticles,
  updateArticle,
} from "../controllers/articleController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router
  .route("/:userId")
  .post(verifyUser, createArticle)
  .put(verifyUser, updateArticle)

router.get("/", getArticles)
router.get("/random", randomArticles)
router.get("/recent", recentArticles)
router.get("/mostBookmarked", mostBookmarked)
router.get("/:slug", getArticle)
router.get("/:userId/usersBookmarked", verifyUser, getBookmarked)
router.delete("/:userId/:articleId", verifyUser, deleteArticle)
router.put("/:userId/bookmark", verifyUser, bookmarkArticle)

export default router

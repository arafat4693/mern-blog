import express from "express"
import {
  authorArticles,
  bookmarkArticle,
  createArticle,
  deleteArticle,
  getArticle,
  getArticles,
  getBookmarked,
  getByTagsOrCats,
  searchArticles,
  updateArticle,
  userArticles,
} from "../controllers/articleController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router
  .route("/:userId")
  .post(verifyUser, createArticle)
  .put(verifyUser, updateArticle)

router.get("/", getArticles)
router.get("/search", searchArticles)
router.get("/tagsOrCats/:type", getByTagsOrCats)
router.get("/author/:authorId", authorArticles)
router.get("/:userId/user", userArticles)
router.get("/:slug", getArticle)
router.get("/:userId/usersBookmarked", verifyUser, getBookmarked)
router.delete("/:userId/:articleId", verifyUser, deleteArticle)
router.put("/:userId/bookmark", verifyUser, bookmarkArticle)

export default router

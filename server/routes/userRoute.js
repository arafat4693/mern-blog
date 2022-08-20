import express from "express"
import {
  allUsers,
  bookmarkArticle,
  followAuthor,
} from "../controllers/userController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", allUsers)
router.put("/:userId/bookmark", verifyUser, bookmarkArticle)
router.put("/:userId/follow", verifyUser, followAuthor)

export default router

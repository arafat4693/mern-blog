import express from "express"
import { allUsers, bookmarkArticle } from "../controllers/userController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/", allUsers)
router.put("/:userId/bookmark", verifyUser, bookmarkArticle)

export default router

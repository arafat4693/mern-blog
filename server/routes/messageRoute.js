import express from "express"
import {
  articleMessages,
  deleteMessage,
  newMessage,
  updateMessage,
} from "../controllers/messageController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.get("/:articleId", articleMessages)

router
  .route("/:userId")
  .post(verifyUser, newMessage)
  .put(verifyUser, updateMessage)

router.delete("/:userId/:messageId", verifyUser, deleteMessage)

export default router

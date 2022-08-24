import express from "express"
import { sendMessage } from "../controllers/contactController.js"
import { verifyUser } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/:userId", verifyUser, sendMessage)

export default router

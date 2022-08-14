import express from "express"
import { allUsers } from "../controllers/userController.js"

const router = express.Router()

router.get("/", allUsers)

export default router

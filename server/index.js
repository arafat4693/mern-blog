import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import authRoute from "./routes/authRoute.js"
import articleRoute from "./routes/articleRoute.js"
import messageRoute from "./routes/messageRoute.js"
import userRoute from "./routes/userRoute.js"
import contactRoute from "./routes/contactRoute.js"
import "./passport.js"
import { errorHandler } from "./middlewares/errorMiddleware.js"
import mongoose from "mongoose"

dotenv.config()

const PORT = process.env.PORT || 5000
const ORIGIN = process.env.CLIENT_ORIGIN
const app = express()

function connect() {
  try {
    mongoose.connect(process.env.MONGO)
    console.log("connected to mongodb")
  } catch (error) {
    throw error
  }
}

const sess = {
  secret: "some-secret",
  resave: true,
  saveUninitialized: true,
  cookie: {},
}

if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1)
  sess.cookie.secure = true
  sess.cookie.sameSite = "none"
  sess.cookie.maxAge = 1000 * 60 * 60 * 24 * 7 // One Week
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    credentials: true,
    origin: ORIGIN,
  })
)
app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session()) //important because deserializeUser has to decode the information from the session id

app.use("/auth", authRoute)
app.use("/article", articleRoute)
app.use("/message", messageRoute)
app.use("/user", userRoute)
app.use("/contact", contactRoute)

app.get("/", (req, res) => {
  res.send("Hello from server")
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connect()
})

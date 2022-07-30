import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import authRoute from "./routes/authRoute.js"
import "./passport.js"
import { errorHandler } from "./middlewares/errorMiddleware.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const ORIGIN = process.env.CLIENT_ORIGIN
const app = express()

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

app.get("/", (req, res) => {
  res.send("Hello from server")
})

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

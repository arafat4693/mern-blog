import express from "express"
import passport from "passport"
import { registerUser } from "../controllers/authController.js"

const router = express.Router()

router.get("/login/failed", (req, res) => {
  res.status(401)
  throw new Error("Failed to authenticate")
})

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.sendStatus(400)
  }
})

router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout(function (err) {
      if (err) return next(err)
      res.status(200).json({ message: "successfully logged out" })
      // res.redirect(process.env.CLIENT_ORIGIN)
    })
  }
})

//github auth
router.get("/github", passport.authenticate("github", { scope: ["user"] }))

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/auth/login/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_ORIGIN)
  }
)

//google auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/login/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_ORIGIN)
  }
)

//twitter auth
router.get("/twitter", passport.authenticate("twitter"))

router.get(
  "/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/auth/login/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_ORIGIN)
  }
)

//email and password auth
router.post("/register", registerUser)
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/auth/login/failed" }),
  function (req, res) {
    const { password, ...other } = req.user._doc
    res.status(200).json({ user: other, message: "successfully logged in" })
  }
)

export default router

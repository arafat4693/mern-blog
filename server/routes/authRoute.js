import express from "express"
import passport from "passport"
import { registerUser } from "../controllers/authController.js"

const router = express.Router()

router.get("/login/failed", (req, res) => {
  res.status(401)
  throw new Error("Failed to authenticate")
})

router.get("/login/success", (req, res) => {
  res.send(req.user)
})

router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout(function (err) {
      if (err) return next(err)
      res.redirect(process.env.CLIENT_ORIGIN)
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

export default router

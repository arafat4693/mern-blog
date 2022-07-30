import express from "express"
import passport from "passport"

const router = express.Router()

router.get("/github", passport.authenticate("github", { scope: ["user"] }))

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect(process.env.CLIENT_ORIGIN)
  }
)

export default router

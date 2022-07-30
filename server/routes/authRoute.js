import express from "express"
import passport from "passport"

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

export default router

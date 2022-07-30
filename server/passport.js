import gitHubStrategy from "passport-github2"
import passport from "passport"
import dotenv from "dotenv"

dotenv.config()

const GitHub = gitHubStrategy.Strategy

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

passport.use(
  new GitHub(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile)
      done(null, profile)
    }
  )
)

import gitHubStrategy from "passport-github2"
import googleStrategy from "passport-google-oauth20"
import twitterStrategy from "passport-twitter"
import localStrategy from "passport-local"
import passport from "passport"
import dotenv from "dotenv"
import UserModel from "./models/userModel.js"
import bcrypt from "bcrypt"

dotenv.config()

const GitHub = gitHubStrategy.Strategy
const Google = googleStrategy.Strategy
const Twitter = twitterStrategy.Strategy
const Local = localStrategy.Strategy

passport.serializeUser(function (user, done) {
  done(null, user._id)
})

passport.deserializeUser(async function (id, done) {
  UserModel.findById(id, (err, user) => {
    if (err) return done(err, null)
    return done(null, user)
  })
})

passport.use(
  new GitHub(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      UserModel.findOne({ githubId: profile.id }, async (err, user) => {
        if (err) return done(err, null)
        if (!user) {
          let newUser = new UserModel({
            displayName: profile.username,
            imgUrl: profile.photos[0].value,
            githubId: profile.id,
          })
          newUser = await newUser.save()
          return done(null, newUser)
        }
        return done(null, user)
      })
    }
  )
)

passport.use(
  new Google(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      UserModel.findOne({ googleId: profile.id }, async (err, user) => {
        if (err) return cb(err, null)
        if (!user) {
          let newUser = new UserModel({
            displayName: profile.displayName,
            imgUrl: profile.photos[0].value,
            googleId: profile.id,
          })
          newUser = await newUser.save()
          return cb(null, newUser)
        }
        return cb(null, user)
      })
    }
  )
)

passport.use(
  new Twitter(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
    },
    function (token, tokenSecret, profile, cb) {
      UserModel.findOne({ twitterId: profile.id }, async (err, user) => {
        if (err) return cb(err, null)
        if (!user) {
          let newUser = new UserModel({
            displayName: profile.displayName,
            imgUrl: profile.photos[0].value,
            twitterId: profile.id,
          })
          newUser = await newUser.save()
          return cb(null, newUser)
        }
        return cb(null, user)
      })
    }
  )
)

passport.use(
  new Local({ usernameField: "email" }, function (email, password, done) {
    UserModel.findOne({ email }, function (err, user) {
      if (err) return done(err)
      if (!user || !bcrypt.compareSync(password, user.password))
        return done(null, false)
      return done(null, user)
    })
  })
)

//api-key: CgUW72NvzJ7QfZednNZVdep02
//api-secret: yq0gY2dGo1QyTDKQSuKsnsg64twrqgFwTSlqdt25LJ4msKLXcR
//bearer: AAAAAAAAAAAAAAAAAAAAAJ%2ByfQEAAAAAI6h2V2Xnjlp5vsGqLwgP%2F6fWbHM%3DSKXMpC77kszrrRHquUS510kTDjCinusqfzNtxsvTckZGSvpTe6

//XeYqf65bAqMSzVpdJEMaiemoV
//C4OXHM4BdIYjdoJFbzl5lgHErQbzMoNcukO01PDvE7Jy3mfLyZ

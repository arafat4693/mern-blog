import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    password: {
      type: String,
      minLength: 4,
    },
    imgName: String,
    imgUrl: String,
    googleId: String,
    twitterId: String,
    githubId: String,
    followers: [mongoose.SchemaTypes.ObjectId],
    following: [mongoose.SchemaTypes.ObjectId],
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)

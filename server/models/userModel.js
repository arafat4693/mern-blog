import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      minLength: 4,
    },
    imgName: String,
    imgUrl: String,
  },
  { timestamps: true }
)

export default mongoose.model("User", userSchema)

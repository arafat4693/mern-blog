import mongoose from "mongoose"

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    articleId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Article",
      required: true,
    },
    parentId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Message",
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Message", messageSchema)

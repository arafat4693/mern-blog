import mongoose from "mongoose"
import { marked } from "marked"
import slugify from "slugify"
import createDOMPurify from "dompurify"
import { JSDOM } from "jsdom"

const window = new JSDOM("").window
const DOMPurify = createDOMPurify(window)

const articleSchema = new mongoose.Schema(
  {
    writerId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnailImg: {
      type: String,
      required: true,
    },
    thumbnailImgName: {
      type: String,
      required: true,
    },
    markdown: {
      type: String,
      required: true,
    },
    tags: [String],
    categories: {
      type: [String],
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    convertedHtml: {
      type: String,
      required: true,
    },
    bookmarkedBy: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "User",
    },
  },
  { timestamps: true }
)

articleSchema.pre("validate", function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { strict: true, lower: true })
  }
  if (this.markdown) {
    this.convertedHtml = DOMPurify.sanitize(marked.parse(this.markdown))
  }
  next()
})

export default mongoose.model("Article", articleSchema)

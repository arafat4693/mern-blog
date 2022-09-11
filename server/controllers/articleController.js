import asyncHandler from "express-async-handler"
import ArticleModel from "../models/articleModel.js"
import MessageModel from "../models/messageModel.js"
import slugify from "slugify"
import mongoose from "mongoose"

// @desc   get articles
// @route  GET article/
// @access Public
export const getArticles = asyncHandler(async (req, res) => {
  const recent = ArticleModel.find().sort({ createdAt: "desc" }).limit(8)
  const random = ArticleModel.aggregate([{ $sample: { size: 30 } }])
  const mostBookmarked = ArticleModel.aggregate([
    { $unwind: "$bookmarkedBy" },
    {
      $group: {
        _id: "$_id",
        slug: { $first: "$slug" },
        thumbnailImg: { $first: "$thumbnailImg" },
        title: { $first: "$title" },
        createdAt: { $first: "$createdAt" },
        count: { $sum: 1 },
      },
    },
    { $sort: { count: -1, createdAt: -1 } },
    { $limit: 5 },
  ])
  const articles = await Promise.all([recent, random, mostBookmarked])
  res.status(200).json([...articles[0], ...articles[1], ...articles[2]])
})

// @desc   get authors articles
// @route  GET article/author/:authorId
// @access Public
export const authorArticles = asyncHandler(async (req, res) => {
  const { authorId } = req.params

  const articles = await ArticleModel.aggregate([
    { $match: { writerId: mongoose.Types.ObjectId(authorId) } },
    {
      $lookup: {
        from: "messages",
        localField: "_id",
        foreignField: "articleId",
        as: "messages",
      },
    },
    {
      $project: {
        writerId: 1,
        slug: 1,
        thumbnailImg: 1,
        title: 1,
        description: 1,
        tags: 1,
        categories: 1,
        bookmarkedBy: 1,
        createdAt: 1,
        totalMessages: { $size: "$messages" },
      },
    },
    { $limit: req.query.limit ? +req.query.limit : Number.MAX_SAFE_INTEGER },
  ])

  res.status(200).json(articles)
})

// @desc   articles by tags or categories
// @route  GET article/tagsOrCats/:type?q=""
// @access Public
export const getByTagsOrCats = asyncHandler(async (req, res) => {
  const query = req.query.q.split(",")
  const { type } = req.params
  const articles = await ArticleModel.aggregate([
    { $match: { [type]: { $in: query } } },
    { $sample: { size: 30 } },
    {
      $lookup: {
        from: "messages",
        localField: "_id",
        foreignField: "articleId",
        as: "messages",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "writerId",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $project: {
        displayName: {
          $let: {
            vars: {
              firstMember: {
                $arrayElemAt: ["$author", 0],
              },
            },
            in: "$$firstMember.displayName",
          },
        },
        imgUrl: {
          $let: {
            vars: {
              firstMember: {
                $arrayElemAt: ["$author", 0],
              },
            },
            in: "$$firstMember.imgUrl",
          },
        },
        writerId: 1,
        slug: 1,
        thumbnailImg: 1,
        title: 1,
        description: 1,
        tags: 1,
        categories: 1,
        bookmarkedBy: 1,
        createdAt: 1,
        totalMessages: { $size: "$messages" },
      },
    },
  ])
  res.status(200).json(articles)
})

// @desc   search articles
// @route  GET article/search?q=""
// @access Public
export const searchArticles = asyncHandler(async (req, res) => {
  const query = req.query.q
  const articles = await ArticleModel.aggregate([
    { $match: { title: { $regex: query, $options: "i" } } },
    { $sample: { size: 30 } },
    {
      $lookup: {
        from: "messages",
        localField: "_id",
        foreignField: "articleId",
        as: "messages",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "writerId",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $project: {
        displayName: {
          $let: {
            vars: {
              firstMember: {
                $arrayElemAt: ["$author", 0],
              },
            },
            in: "$$firstMember.displayName",
          },
        },
        imgUrl: {
          $let: {
            vars: {
              firstMember: {
                $arrayElemAt: ["$author", 0],
              },
            },
            in: "$$firstMember.imgUrl",
          },
        },
        writerId: 1,
        slug: 1,
        thumbnailImg: 1,
        title: 1,
        description: 1,
        tags: 1,
        categories: 1,
        bookmarkedBy: 1,
        createdAt: 1,
        totalMessages: { $size: "$messages" },
      },
    },
  ])
  res.status(200).json(articles)
})

// @desc   get users articles
// @route  GET article/:userId/user
// @access Private
export const userArticles = asyncHandler(async (req, res) => {
  const articles = await ArticleModel.find({ writerId: req.params.userId })
  res.status(200).json(articles)
})

// @desc   get one article
// @route  GET article/:slug
// @access Public
export const getArticle = asyncHandler(async (req, res) => {
  const { slug } = req.params
  const article = await ArticleModel.findOne({ slug })
  res.status(200).json(article)
})

// @desc   create article
// @route  POST article/:userId
// @access Private
export const createArticle = asyncHandler(async (req, res) => {
  const slug = slugify(req.body.title, { strict: true, lower: true })
  const check = await ArticleModel.countDocuments({ slug })
  if (check) {
    res.status(401)
    throw new Error("Title already exits. Name your article unique")
  }
  let article = new ArticleModel(req.body)
  article = await article.save()
  res.status(201).json({ article, message: "Successfully created" })
})

// @desc   update article
// @route  PUT article/:userId
// @access Private
export const updateArticle = asyncHandler(async (req, res) => {
  const {
    articleId,
    title,
    description,
    thumbnailImg,
    thumbnailImgName,
    tags,
    categories,
    markdown,
  } = req.body
  let article = await ArticleModel.findOne({ _id: articleId })

  article.title = title
  article.description = description
  article.thumbnailImg = thumbnailImg
  article.thumbnailImgName = thumbnailImgName
  article.tags = tags
  article.categories = categories
  article.markdown = markdown
  article = await article.save()

  res.status(200).json({ article, message: "Successfully updated" })
})

// @desc   delete article
// @route  DELETE article/:userId/:articleId
// @access Private
export const deleteArticle = asyncHandler(async (req, res) => {
  const { articleId } = req.params
  await Promise.all([
    ArticleModel.deleteOne({ _id: articleId }),
    MessageModel.deleteMany({ articleId }),
  ])
  res.status(200).json({ articleId, message: "Successfully deleted" })
})

// @desc   bookmark article
// @route  PUT article/:userId/bookmark
// @access Private
export const bookmarkArticle = asyncHandler(async (req, res) => {
  const { articleId, isBookmark } = req.body
  const { userId } = req.params
  if (isBookmark) {
    await ArticleModel.updateOne(
      { _id: articleId },
      { $pull: { bookmarkedBy: userId } }
    )
  } else {
    await ArticleModel.updateOne(
      { _id: articleId },
      { $push: { bookmarkedBy: userId } }
    )
  }
  res
    .status(200)
    .json(
      isBookmark
        ? "Removed article from your bookmark"
        : "Added article to your bookmark"
    )
})

// @desc   get bookmarked articles
// @route  GET article/:userId/usersBookmarked
// @access Private
export const getBookmarked = asyncHandler(async (req, res) => {
  const articles = await ArticleModel.find({
    bookmarkedBy: { $in: [req.params.userId] },
  })
  res.status(200).json(articles)
})

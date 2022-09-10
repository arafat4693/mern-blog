export interface UserData {
  displayName: string
  email: string
  password: string
  imageFile: [object]
}

export interface LoginData {
  email: string
  password: string
}

export interface MongoUser {
  _id: string
  __v: number
  displayName: string
  email?: string
  password?: string
  imgName?: string
  imgUrl?: string
  googleId?: string
  twitterId?: string
  githubId?: string
  followers: string[] | []
  following: string[] | []
  createdAt: Date
  updatedAt: Date
}

export interface MongoArticle {
  _id: string
  __v: number | ""
  writerId: string | ""
  title: string
  description: string
  thumbnailImg: string
  thumbnailImgName: string | ""
  markdown: string | ""
  tags: string[] | []
  categories: string[]
  bookmarkedBy: string[] | []
  slug: string
  convertedHtml: string | ""
  totalMessages: number | ""
  displayName: string | ""
  imgUrl: string | undefined
  createdAt: Date
  updatedAt: Date | ""
}

export interface ArticleData {
  writerId: string
  title: string
  description: string
  thumbnail: [object]
  markdown: string
  tags: string[] | []
  categories: string[]
}

export interface UpdateArticle {
  articleId: string
  title: string
  description: string
  markdown: string
  tags: string[] | []
  categories: string[]
  thumbnail: object[] | []
  thumbnailImg: string
  thumbnailImgName: string
}

export interface MongoMessage {
  _id: string
  __v: number
  articleId: string
  senderId: string
  parentId?: string
  message: string
  createdAt: Date
  updatedAt: Date
}

export interface MessageData {
  articleId: string
  senderId: string
  parentId?: string
  message: string
}

export interface UpdateMessage {
  message: string
  messageId: string
}

export interface ContactData {
  name: string
  email: string
  message: string
}

export interface AuthorArticle {
  _id: string
  title: string
  description: string
  thumbnailImg: string
  tags: string[] | []
  categories: string[]
  bookmarkedBy: string[] | []
  slug: string
  totalMessage: number
  createdAt: Date
}

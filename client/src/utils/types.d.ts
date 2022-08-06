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
  username: string
  email?: string
  password?: string
  imgName?: string
  imgUrl?: string
  googleId?: string
  twitterId?: string
  githubId?: string
  followers?: [string]
  following?: [string]
  createdAt: Date
  updatedAt: Date
}

export interface MongoArticle {
  _id: string
  __v: number
  writerId: string
  title: string
  description: string
  thumbnailImg: string
  thumbnailImgName: string
  markdown: string
  tags: string[] | []
  categories: string[]
  slug: string
  convertedHtml: string
  createdAt: Date
  updatedAt: Date
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

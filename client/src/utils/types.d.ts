export interface UserData {
  username: string
  email: string
  password: string
  imageFile: [object]
}

export interface MongoUser {
  _id: string
  __v: number
  username: string
  email: string
  password?: string
  imgName?: string
  imgUrl?: string
  createdAt: Date
  updatedAt: Date
}

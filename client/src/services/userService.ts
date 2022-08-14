import axios from "../utils/axiosConfig"
import { LoginData, UserData } from "../utils/types"
import { v4 } from "uuid"
import imgUpload from "../utils/imgUpload"

async function register(url: string, userData: UserData) {
  const imgName = v4()
  let imgUrl

  if (userData.imageFile[0]) {
    imgUrl = await imgUpload(userData.imageFile[0], imgName)
  }

  const res = await axios.post(url, { ...userData, imgUrl, imgName })
  return res.data
}

async function login(url: string, loginData: LoginData) {
  const res = await axios.post(url, loginData)
  return res.data
}

async function allUsers(url: string) {
  const res = await axios.get(url)
  return res.data
}

const userServices = { register, login, allUsers }
export default userServices

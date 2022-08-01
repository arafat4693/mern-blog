import axios from "../utils/axiosConfig"
import { UserData } from "../utils/types"
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

const userServices = { register }
export default userServices

import axios from "../utils/axiosConfig"
import { MessageData, UpdateMessage } from "../utils/types"

async function allMessages(url: string) {
  const res = await axios.get(url)
  return res.data
}

async function newMessage(url: string, messageData: MessageData) {
  const res = await axios.post(url, messageData)
  return res.data
}

async function updateMessage(url: string, messageData: UpdateMessage) {
  const res = await axios.put(url, messageData)
  return res.data
}

async function deleteMessage(url: string) {
  const res = await axios.delete(url)
  return res.data
}

const messageService = { allMessages, newMessage, updateMessage, deleteMessage }
export default messageService

import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "../utils/axiosConfig"
import { MongoArticle } from "../utils/types"
import { getErrMsg } from "../utils/utilFunctions"

export default function useGet(url: string) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<undefined | MongoArticle>(undefined)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const { data: responseData } = await axios.get(url)
        setData(responseData)
      } catch (err: any) {
        const message = getErrMsg(err)
        toast(message, { type: "error", autoClose: 2300 })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [setLoading, setData, url])

  return { data, loading }
}

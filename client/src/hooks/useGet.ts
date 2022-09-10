import { Dispatch, useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "../utils/axiosConfig"
import { MongoUser } from "../utils/types"
import { getErrMsg } from "../utils/utilFunctions"

export function useAuthGet<Type>(
  url: string,
  initialValue: any,
  user: MongoUser | null | undefined
) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Type>(initialValue)

  useEffect(() => {
    if (!user) return
    fetchData(setLoading, setData, url)
  }, [setLoading, setData, url, user])

  return { data, loading }
}

export function useGet<Type>(
  url: string,
  initialValue: any,
  setPage?: Dispatch<number>
) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Type>(initialValue)

  useEffect(() => {
    fetchData(setLoading, setData, url)
    if (setPage) setPage(0)
  }, [setLoading, setData, url, setPage])

  return { data, loading }
}

async function fetchData(
  setLoading: Dispatch<boolean>,
  setData: any,
  url: string
) {
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

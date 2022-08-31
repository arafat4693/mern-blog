import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import { RootState } from "../redux/store"
import axios from "../utils/axiosConfig"
import { getErrMsg } from "../utils/utilFunctions"

export default function useGet<Type>(
  url: string,
  initialValue: any,
  auth?: boolean
) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Type>(initialValue)
  const { user } = useSelector((state: RootState) => state.user)

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
    if (auth && user === null) return
    fetchData()
  }, [setLoading, setData, url, auth, user])

  return { data, loading }
}

// export function useGetBookmark<Type>(url: string, user: MongoUser | null) {
//   const [loading, setLoading] = useState(false)
//   const [data, setData] = useState<Type>([])

//   useEffect(() => {
//     if (user === null) return setData([])
//     fetchData(setLoading, setData, url)
//   }, [setLoading, setData, url, user])

//   return { data, loading }
// }

// async function fetchData(
//   setLoading: Dispatch<boolean>,
//   setData: any,
//   url: string
// ) {
//   setLoading(true)
//   try {
//     const { data: responseData } = await axios.get(url)
//     setData(responseData)
//   } catch (err: any) {
//     const message = getErrMsg(err)
//     toast(message, { type: "error", autoClose: 2300 })
//   } finally {
//     setLoading(false)
//   }
// }

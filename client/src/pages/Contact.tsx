import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import OverlapHeader from "../components/layouts/OverlapHeader"
import { RootState } from "../redux/store"
import axios from "../utils/axiosConfig"
import { ContactData } from "../utils/types"
import { getErrMsg } from "../utils/utilFunctions"

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactData>()
  const [loading, setLoading] = useState<boolean>(false)
  const { user } = useSelector((state: RootState) => state.user)

  const contact: SubmitHandler<ContactData> = async (contactData) => {
    if (user === null)
      return toast("please login first!!!", { type: "info", autoClose: 2300 })
    try {
      setLoading(true)
      const { data } = await axios.post(`/contact/${user._id}`, contactData)
      toast(data, { type: "success", autoClose: 2300 })
      setLoading(false)
      reset()
    } catch (err) {
      setLoading(false)
      const message = getErrMsg(err)
      toast(message, { type: "error", autoClose: 2300 })
    }
  }

  return (
    <main className="sm:mt-40 mt-24">
      <section className="wrapper max-w-[1240px] mx-auto xl:px-0 px-14">
        <OverlapHeader
          title="Get In Touch With Us"
          overlapTitle="before:content-['contact']"
        />
        <form
          onSubmit={handleSubmit(contact)}
          className="w-[75rem] max-w-full mx-auto sm:mt-24 mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <label
                htmlFor="name"
                className="block text-2xl text-gray-500 mb-2"
              >
                Your name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                className="w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-2xl text-gray-500 mb-2"
              >
                Your email
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                id="email"
                className="w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
              />
            </div>
          </div>

          <div className="mt-10">
            <label htmlFor="msg" className="block text-2xl text-gray-500 mb-2">
              Your message
            </label>
            <textarea
              {...register("message", { required: true })}
              id="msg"
              className="w-full resize-none h-96 bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
            />
          </div>

          <input
            type="submit"
            value="submit"
            className={`text-white ${
              loading
                ? "pointer-events-none cursor-default bg-violet-500"
                : "bg-violet-700 hover:bg-gray-700"
            } transition-all duration-300 mt-6 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold`}
          />
        </form>
      </section>
    </main>
  )
}

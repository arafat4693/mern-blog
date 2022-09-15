import { Dispatch, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { UserData } from "../../utils/types"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../redux/userSlice"
import { AppDispatch, RootState } from "../../redux/store"
import Loader from "./Loader"
import { toast } from "react-toastify"

interface Props {
  move: boolean
  closeAuth: boolean
  setMove: Dispatch<boolean>
}

export default function Register({ setMove, closeAuth }: Props) {
  const { register, handleSubmit, reset } = useForm<UserData>()
  const { userSuccess, userLoading, userAction } = useSelector(
    (state: RootState) => state.user
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if ((userSuccess && userAction === "REGISTER") || closeAuth) reset()
  }, [userSuccess, closeAuth, reset, userAction])

  const signUp: SubmitHandler<UserData> = (data) => {
    if (data.password.length < 4)
      return toast("Password should be at least 4 characters long", {
        type: "info",
        autoClose: 2300,
      })
    dispatch(registerUser(data))
  }

  return (
    <form
      onSubmit={handleSubmit(signUp)}
      className="transition-all px-7 duration-300 w-1/2"
    >
      <div>
        <label
          htmlFor="displayName"
          className="block text-2xl text-gray-500 mb-2"
        >
          Display name
        </label>
        <input
          {...register("displayName", { required: true })}
          type="text"
          id="displayName"
          className="w-full bg-gray-300/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="block text-2xl text-gray-500 mb-2">
          E-mail
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          className="w-full bg-gray-300/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="pass" className="block text-2xl text-gray-500 mb-2">
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="pass"
          className="w-full bg-gray-300/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="image" className="block text-2xl text-gray-500 mb-2">
          Avatar
        </label>
        <input
          {...register("imageFile")}
          type="file"
          id="image"
          className="w-full bg-gray-300/70 px-5 py-3 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      {userLoading ? (
        <Loader />
      ) : (
        <input
          type="submit"
          value="Sign up"
          className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-6 cursor-pointer rounded-lg py-4 w-full text-2xl uppercase font-semibold"
        />
      )}

      <p className="text-xl text-gray-700 mt-3">
        Already have an account?{" "}
        <span
          onClick={() => setMove(false)}
          className="cursor-pointer text-violet-700 hover:underline font-medium"
        >
          Login
        </span>
      </p>
    </form>
  )
}

import { Dispatch, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { LoginData } from "../../utils/types"
import { loginUser } from "../../redux/userSlice"
import Loader from "./Loader"

interface Props {
  move: boolean
  closeAuth: boolean
  setMove: Dispatch<boolean>
  setCloseAuth: Dispatch<boolean>
}

export default function Login({
  move,
  setMove,
  setCloseAuth,
  closeAuth,
}: Props) {
  const { register, handleSubmit, reset } = useForm<LoginData>()
  const { userSuccess, userLoading, userAction } = useSelector(
    (state: RootState) => state.user
  )
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if ((userSuccess && userAction === "LOGIN") || closeAuth) {
      reset()
      setCloseAuth(true)
    }
  }, [userSuccess, closeAuth, reset, setCloseAuth, userAction])

  const login: SubmitHandler<LoginData> = (data) => {
    dispatch(loginUser(data))
  }

  return (
    <form
      onSubmit={handleSubmit(login)}
      className={`transition-all px-7 duration-300 w-1/2 ${
        move ? "-ml-[50%]" : "ml-0"
      }`}
    >
      <div>
        <label htmlFor="email1" className="block text-2xl text-gray-500 mb-2">
          E-mail
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email1"
          className="w-full bg-gray-300/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      <div className="mt-5">
        <label htmlFor="pass1" className="block text-2xl text-gray-500 mb-2">
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="pass1"
          className="w-full bg-gray-300/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      {userLoading ? (
        <Loader />
      ) : (
        <input
          type="submit"
          value="Login"
          className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-6 cursor-pointer rounded-lg py-4 w-full text-2xl uppercase font-semibold"
        />
      )}

      <p className="text-xl text-gray-700 mt-3">
        Don't have an account?{" "}
        <span
          onClick={() => setMove(true)}
          className="cursor-pointer text-violet-700 hover:underline font-medium"
        >
          Register
        </span>
      </p>
    </form>
  )
}

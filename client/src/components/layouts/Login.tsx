import { Dispatch } from "react"

interface Props {
  move: boolean
  setMove: Dispatch<boolean>
}

export default function Login({ move, setMove }: Props) {
  return (
    <div
      className={`min-w-full transition-all duration-300 ${
        move ? "-translate-x-[36.5rem]" : "translate-x-0"
      }`}
    >
      <div>
        <label htmlFor="email" className="block text-2xl text-gray-500 mb-2">
          E-mail
        </label>
        <input
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
          type="password"
          id="pass"
          className="w-full bg-gray-300/70 px-6 py-4 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
        />
      </div>

      <input
        type="submit"
        value="Login"
        className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-6 cursor-pointer rounded-lg py-4 w-full text-2xl uppercase font-semibold"
      />

      <p className="text-xl text-gray-700 mt-3">
        Don't have an account?{" "}
        <span
          onClick={() => setMove(true)}
          className="cursor-pointer text-violet-700 hover:underline font-medium"
        >
          Register
        </span>
      </p>
    </div>
  )
}

interface Props {
  msg: string
}

export default function ErrMsg({ msg }: Props) {
  return (
    <h3 className="w-[45rem] max-w-full mx-auto py-5 rounded-xl text-center capitalize bg-violet-200/60 text-gray-800 text-2xl font-medium mt-8">
      {msg}
    </h3>
  )
}

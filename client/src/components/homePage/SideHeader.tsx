interface Props {
  title: string
}

export default function SideHeader({ title }: Props) {
  return (
    <h4
      className={`text-gray-800 font-semibold text-4xl capitalize flex items-center gap-4 ml-5 mb-10`}
    >
      {title}
      <span className="bg-violet-800 w-3 h-3 rounded-full mt-3.5"></span>
    </h4>
  )
}

interface Props {
  title: string
}

export default function UnderlineHeader({ title }: Props) {
  return (
    <div>
      <h1 className="capitalize text-4xl text-gray-800 font-medium">{title}</h1>

      <div className="divider flex items-center gap-2 mt-2">
        <span className="w-12 h-1.5 bg-violet-800 rounded-full"></span>
        <span className="w-2 h-2 rounded-full bg-violet-800"></span>
        <span className="w-2 h-2 rounded-full bg-violet-800"></span>
        <span className="w-2 h-2 rounded-full bg-violet-800"></span>
      </div>
    </div>
  )
}

interface Props {
  title: string
  overlapTitle: string
}

export default function OverlapHeader({ title, overlapTitle }: Props) {
  return (
    <h1
      className={`capitalize text-gray-800 text-center text-5xl font-medium relative ${overlapTitle} before:absolute sm:before:block before:hidden before:-top-[190%] before:left-1/2 before:-translate-x-1/2 before:text-[10rem] before:font-semibold before:uppercase before:text-[#140C470F] before:leading-none`}
    >
      {title}
    </h1>
  )
}

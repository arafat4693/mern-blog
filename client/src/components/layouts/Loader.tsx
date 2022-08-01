import ReactLoading from "react-loading"

interface Props {
  customCss?: string
}

export default function Loader({ customCss }: Props) {
  return (
    <div className={`${customCss && customCss} flex justify-center mt-2`}>
      <ReactLoading type={"bubbles"} color={"#5b21b6"} height={25} width={40} />
    </div>
  )
}

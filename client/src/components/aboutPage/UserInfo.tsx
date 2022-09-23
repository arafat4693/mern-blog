import { MongoUser } from "../../utils/types"
import { formateImg } from "../../utils/utilFunctions"

interface Props {
  user: MongoUser
}

export default function UserInfo({ user }: Props) {
  const name = user.displayName.split(" ")
  return (
    <div className="lg:h-[60rem] lg:py-0 pb-24 bg-violet-100/80 rounded-xl mt-20 sm:mt-64 px-24 relative">
      <h1 className="absolute -top-16 -left-2 uppercase text-[30rem] font-semibold text-[#140C470F] leading-none">
        {name[0][0]}
      </h1>
      <div className={`name inline-flex flex-col mt-24 ml-10 relative`}>
        <span className="text-violet-800 text-7xl font-medium inline-block">
          {name[0]}
        </span>
        <span className="text-gray-800 text-7xl font-medium">{name[1]}</span>
      </div>

      <p className="text-3xl text-gray-500 leading-relaxed max-w-[56rem] mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut laborea aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea
        aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut laborea aliqua.
      </p>

      <img
        src={formateImg(user.imgUrl)}
        alt="user"
        className="absolute -top-32 right-20 object-cover w-[50rem] h-[60rem] rounded-xl lg:block hidden"
      />
    </div>
  )
}

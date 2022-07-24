export default function UserInfo() {
  return (
    <div className="h-[60rem] bg-violet-100/80 rounded-xl mt-64 px-24 relative">
      <div className="name inline-flex flex-col mt-24 ml-10 relative before:content-['A'] before:absolute before:-top-[115%] before:-left-[62%] before:text-[30rem] before:font-semibold before:text-[#140C470F] before:leading-none">
        <span className="text-violet-800 text-7xl font-medium inline-block">
          Alice
        </span>
        <span className="text-gray-800 text-7xl font-medium">Qelvin</span>
      </div>

      <p className="text-3xl text-gray-500 leading-relaxed max-w-[56rem] mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut laborea aliqua. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborea
        aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut laborea aliqua.
      </p>

      <img
        src="/images/user.jpg"
        alt="user"
        className="absolute -top-32 right-20 object-cover w-[50rem] h-[60rem] rounded-xl"
      />
    </div>
  )
}

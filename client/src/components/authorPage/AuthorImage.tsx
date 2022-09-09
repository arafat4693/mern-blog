interface Props {
  authorImage: string
  authorName: string
}

export default function AuthorImage({ authorImage, authorName }: Props) {
  return (
    <div className="mb-20">
      <div className="relative h-80 mb-36">
        <img
          src={authorImage}
          alt="bg user"
          className="w-full h-full object-cover shadow-lg shadow-gray-300 rounded-3xl"
        />
        <img
          src={authorImage}
          alt="user"
          className="min-w-[14rem] w-56 h-56 object-cover rounded-full absolute top-2/3 left-1/2 -translate-x-1/2 border-2 border-solid border-white"
        />
      </div>
      <h1 className="text-4xl text-gray-800 font-semibold text-center mb-4">
        {authorName}
      </h1>
      <p className="text-2xl text-gray-800 text-center leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut laborea aliqua.
      </p>
    </div>
  )
}

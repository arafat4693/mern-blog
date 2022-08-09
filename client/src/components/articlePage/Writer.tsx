import TooltipIcons from "../layouts/TooltipIcons"

export default function Writer() {
  return (
    <div className="py-20 flex items-center gap-16">
      <img
        src="/images/user.jpg"
        alt="user"
        className="min-w-[12rem] w-48 h-48 object-cover rounded-full shadow-xl"
      />
      <div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl tracking-wider uppercase text-gray-500 mb-3">
              written by
            </p>
            <h2 className="text-4xl text-gray-800 font-semibold">Alice</h2>
          </div>
          <button className="py-3 px-6 bg-violet-700 text-white capitalize text-xl tracking-wide rounded-full">
            follow me
          </button>
        </div>
        <p className="my-8 text-2xl text-gray-500 leading-relaxed">
          My name is Alice, I am so happy, my dear friend, so absorbed in the
          exquisite sense of mere tranquil existence, that I neglect my talents.
          I should be incapable of drawing a single stroke at the present
        </p>
        <TooltipIcons />
      </div>
    </div>
  )
}

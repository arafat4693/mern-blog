export default function NewsLetter() {
  return (
    <section className="my-24">
      <div className="wrapper max-w-[1240px] mx-auto bg-gray-200/60 p-28 flex items-center justify-between">
        <h3 className="text-gray-800 font-medium text-4xl max-w-[42rem] leading-snug">
          Subscribe to our newsletter and stay updated.
        </h3>

        <form className="flex items-center">
          <input
            type="text"
            placeholder="Your email address"
            className="text-xl text-gray-700 py-6 px-8 w-[40rem]"
          />
          <input
            type="submit"
            value="subscribe"
            className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer py-[1.35rem] px-8 text-2xl uppercase font-semibold"
          />
        </form>
      </div>
    </section>
  )
}

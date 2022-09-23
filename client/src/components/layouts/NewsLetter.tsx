export default function NewsLetter() {
  return (
    <section className="my-24">
      <div className="wrapper max-w-[1240px] mx-auto bg-gray-200/60 p-12 sm:p-28 flex items-center justify-between flex-wrap gap-4">
        <h3 className="text-gray-800 font-medium text-3xl sm:text-4xl max-w-[42rem] leading-snug">
          Subscribe to our newsletter and stay updated.
        </h3>

        <form className="flex items-center w-[50rem] max-w-full">
          <input
            type="text"
            placeholder="Your email address"
            className="text-xl text-gray-700 py-6 px-8 w-full"
          />
          <input
            type="submit"
            value="subscribe"
            className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 cursor-pointer py-[1.35rem] px-6 sm:px-8 text-xl sm:text-2xl uppercase font-semibold"
          />
        </form>
      </div>
    </section>
  )
}

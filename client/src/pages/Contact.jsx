import OverlapHeader from "../components/layouts/OverlapHeader"

export default function Contact() {
  return (
    <main>
      <section className="wrapper max-w-[1240px] mx-auto mt-52">
        <OverlapHeader
          title="Get In Touch With Us"
          overlapTitle="before:content-['contact']"
        />
        <form className="w-[75rem] mx-auto mt-24">
          <div className="grid grid-cols-2 gap-14">
            <div>
              <label
                htmlFor="name"
                className="block text-2xl text-gray-500 mb-2"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-2xl text-gray-500 mb-2"
              >
                Your email
              </label>
              <input
                type="text"
                id="email"
                className="w-full bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
              />
            </div>
          </div>

          <div className="mt-10">
            <label htmlFor="msg" className="block text-2xl text-gray-500 mb-2">
              Your message
            </label>
            <textarea
              id="msg"
              className="w-full resize-none h-96 bg-gray-200/70 px-8 py-5 rounded-lg text-2xl text-gray-500 border border-transparent border-solid focus:border-gray-800 transition-all duration-200"
            />
          </div>

          <input
            type="submit"
            value="submit"
            className="text-white bg-violet-700 hover:bg-gray-700 transition-all duration-300 mt-6 cursor-pointer rounded-lg py-4 px-12 text-2xl uppercase font-semibold"
          />
        </form>
      </section>
    </main>
  )
}

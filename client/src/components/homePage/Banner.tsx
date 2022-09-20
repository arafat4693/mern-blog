import SideHeader from "./SideHeader"

export default function Banner() {
  return (
    <div className="mb-16">
      <SideHeader title="advertising" />

      <figure className="lg:h-[30rem] w-full lg:block h-[38rem] flex justify-center">
        <div className="w-[45rem] h-full lg:w-full relative rounded-3xl overflow-hidden cursor-pointer">
          <img
            src="/images/banner.jpg"
            alt="banner"
            className="w-full h-full object-cover"
          />
          <figcaption className="group flex items-center justify-center bg-gray-800/70 hover:bg-orange-800/60 transition-all duration-[400ms] absolute top-0 left-0 w-full h-full before:content-[''] before:absolute before:top-12 before:left-12 before:right-12 before:bottom-12 before:border before:border-solid before:border-white before:scale-0 before:transition-all before:duration-[400ms] hover:before:scale-100">
            <div className="text-center w-4/5">
              <h2 className="text-[2.5rem] font-semibold uppercase text-white mb-4 mt-20 group-hover:mt-0 transition-all duration-[400ms]">
                furify banner
              </h2>
              <p className="text-2xl uppercase text-white group-hover:scale-100 scale-0 transition-all duration-[400ms]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit ...
              </p>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default function Ad() {
  return (
    <section className="my-24 h-96" id="posts">
      <figure className="max-w-[1240px] h-full mx-auto rounded-xl overflow-hidden cursor-pointer group relative">
        <img
          src="/images/ad.jpg"
          alt="ad"
          className="w-full h-full object-cover transition-all duration-300 scale-125 group-hover:scale-100"
        />
        <div className="overlay absolute top-0 left-0 w-full h-full transition-all group-hover:bg-[#2e5d5a] opacity-50" />
        <figcaption className="absolute bottom-16 sm:bottom-12 right-12 uppercase text-3xl sm:text-4xl text-white font-medium tracking-wider">
          furify advertisement
        </figcaption>
        <p className="absolute transition-all duration-[400ms] top-16 left-0 opacity-0 group-hover:left-20 group-hover:opacity-100 uppercase text-2xl text-white font-medium tracking-wide py-2 px-6 border-0 border-r border-solid border-white">
          Lorem ipsum dolor sit amet consectetur adipisicing ....
        </p>
      </figure>
    </section>
  )
}

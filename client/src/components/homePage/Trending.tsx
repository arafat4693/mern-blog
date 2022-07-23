import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import TrendingBox from "./TrendingBox"

const blogs = ["1", "2", "3", "4", "5", "6"]

export default function Trending() {
  return (
    <section className="trending px-6 pt-8 h-[57rem]">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {blogs.map((b, i) => (
          <SwiperSlide key={i} className="bg-violet-500">
            <TrendingBox />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

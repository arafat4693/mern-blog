import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import TrendingBox from "./TrendingBox"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

export default function Trending() {
  const { articles } = useSelector((state: RootState) => state.article)

  return (
    <section className="trending xl:px-6 pt-8 h-[57rem]">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={true}
        loop={true}
        breakpoints={breakpoints}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}
      >
        {articles.slice(0, 8).map((a, i) => (
          <SwiperSlide key={i} className="bg-violet-500">
            <TrendingBox
              title={a.title}
              slug={a.slug}
              thumbnail={a.thumbnailImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1050: {
    slidesPerView: 4,
  },
}

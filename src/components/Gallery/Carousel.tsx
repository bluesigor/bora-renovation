import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import ReviewCard from "../ReviewCard";
import { reviews } from "../../core/constants/reviews";

const Carousel = () => {
  return (
    <Swiper
      slidesPerView={2}
      rewind={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper">
      <SwiperSlide>
        <ReviewCard
          id={2}
          currentIndex={2}
          desc={reviews[1].desc}
          name={reviews[1].name}
          avatar={reviews[1].avatar}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          id={3}
          currentIndex={3}
          desc={reviews[2].desc}
          name={reviews[2].name}
          avatar={reviews[2].avatar}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          id={1}
          currentIndex={1}
          desc={reviews[0].desc}
          name={reviews[0].name}
          avatar={reviews[0].avatar}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

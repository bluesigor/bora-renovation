import { Img } from "react-progressive-loader";
import { SwiperSlide } from "swiper/react";

import stars from "../../assets/images/reviews/stars.svg";
import useMeasures from "../../core/hooks/useMeasures";

type ReviewCardProps = {
  id: number;
  currentIndex: number;
  avatar: string;
  name: string;
  desc: string;
};

const ReviewCard = ({
  id,
  currentIndex,
  avatar,
  name,
  desc,
}: ReviewCardProps) => {
  const { innerWidth } = useMeasures();

  return (
    <div
      className={
        innerWidth < 768
          ? "reviews-list__item"
          : id === currentIndex
          ? "reviews-list__active"
          : "reviews-list__item"
      }>
      <div className="reviews-list__item-top">
        <Img
          placeholderSrc={require("../../assets/images/default.jpg")}
          src={avatar}
          alt={`${avatar}`}
          className="reviews-list__item-top-avatar"
        />
        <div className="reviews-list__item-top-content">
          <span className="reviews-list__item-top-content-name">{name}</span>
          <Img
            placeholderSrc={require("../../assets/images/default.jpg")}
            src={stars}
            alt="stars"
          />
        </div>
      </div>
      <p className="reviews-list__item-text">{desc}</p>
    </div>
  );
};

export default ReviewCard;

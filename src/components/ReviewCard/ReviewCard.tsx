import useMeasures from "../../core/hooks/useMeasures";

import stars from "../../assets/images/reviews/stars.svg";
import { General } from "../../models/index";

type ReviewCardProps = {
  name: string;
  text: string;
  currentIndex: number;
};

const ReviewCard = ({ name, text, currentIndex }: ReviewCardProps) => {
  const { innerWidth } = useMeasures();

  return (
    <div
      className={
        innerWidth < 768
          ? "reviews-list__item"
          : currentIndex === 1
          ? "reviews-list__active"
          : "reviews-list__item"
      }>
      <img
        className={
          innerWidth < 768
            ? "reviews-list__item__stars"
            : currentIndex === 1
            ? "reviews-list__active__stars"
            : "reviews-list__item__stars"
        }
        src={stars}
        alt="stars"
      />
      <p
        className={
          innerWidth < 768
            ? "reviews-list__item__txt"
            : currentIndex === 1
            ? "reviews-list__active__txt"
            : "reviews-list__item__txt"
        }>
        {text}
      </p>
      <div className="reviews-list__item-wrapper">
        <span
          className={
            innerWidth < 768
              ? "reviews-list__item__name"
              : currentIndex === 1
              ? "reviews-list__active__name"
              : "reviews-list__item__name"
          }>
          {name}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;

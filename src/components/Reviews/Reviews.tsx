import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

import arrow_left from "../../assets/images/reviews/arrow-left.svg";
import arrow_right from "../../assets/images/reviews/arrow-right.svg";
import { reviews } from "../../core/constants/reviews";

import ReviewCard from "../ReviewCard";
import { General } from "../../models";

const Reviews = () => {
  const [itemInfo, setItemInfo] = useState<General.Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const { openReviewModal } = useAppContext();

  useEffect(() => {
    setItemInfo(reviews.slice(0, 3));
  }, []);

  const buttonUp = () => {
    switch (currentIndex) {
      case 0:
        setCurrentIndex(1);
        setItemInfo(reviews.slice(1, 4));
        break;
      case 1:
        setCurrentIndex(2);
        setItemInfo(reviews.slice(2, 5));
        break;
      case 2:
        setCurrentIndex(0);
        setItemInfo(reviews.slice(0, 3));
        break;
      default:
        return;
    }
  };

  const buttonDown = () => {
    switch (currentIndex) {
      case 1:
        setCurrentIndex(0);
        setItemInfo(reviews.slice(0, 3));
        break;
      case 2:
        setCurrentIndex(1);
        setItemInfo(reviews.slice(1, 4));
        break;
      default:
        return;
    }
  };

  return (
    <section className="reviews">
      <div className="wrapper-reviews">
        <div className="reviews-list">
          {itemInfo.slice(0, 3).map((review: General.Review, index: number) => {
            const { avatar, id, desc, name } = review;

            return (
              <ReviewCard
                key={id}
                currentIndex={index}
                avatar={avatar}
                name={name}
                desc={desc}
              />
            );
          })}
        </div>
        <div className="reviews-arrows">
          <button onClick={buttonDown} className="reviews-arrows-btn">
            <img
              className="reviews-arrows-btn__icon"
              src={arrow_left}
              alt="arrow-left"
            />
          </button>
          <button onClick={buttonUp} className="reviews-arrows-btn">
            <img
              className="reviews-arrows-btn__icon"
              src={arrow_right}
              alt="arrow-right"
            />
          </button>
        </div>
      </div>
      <div className="reviews-feedback-block">
        <button
          onClick={openReviewModal}
          className="reviews-feedback-block-btn">
          <span className="reviews-feedback-block-btn__txt">
            write a feedback
          </span>
        </button>
      </div>
    </section>
  );
};

export default Reviews;

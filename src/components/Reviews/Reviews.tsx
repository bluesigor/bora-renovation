import { reviews } from "../../core/constants/reviews";
import { General } from "../../models";

import stars from "../../assets/images/reviews/stars.svg";
import arrow_left from "../../assets/images/reviews/arrow-left.svg";
import arrow_right from "../../assets/images/reviews/arrow-right.svg";
import { useState } from "react";
import useMeasures from "../../core/hooks/useMeasures";
import { useAppContext } from "../../context/AppContext";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const { innerWidth } = useMeasures();
  const { openReviewModal } = useAppContext();

  const next = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="reviews">
      <div className="wrapper-reviews">
        <div className="reviews-list">
          {reviews.map((review: General.Review, index: number) => {
            const { avatar, id, desc, name } = review;

            return (
              <div
                key={id}
                className={
                  innerWidth < 768
                    ? "reviews-list__item"
                    : index === currentIndex
                    ? "reviews-list__active"
                    : "reviews-list__item"
                }>
                <div className="reviews-list__item-top">
                  <img
                    src={avatar}
                    alt={`${avatar}`}
                    className="reviews-list__item-top-avatar"
                  />
                  <div className="reviews-list__item-top-content">
                    <span className="reviews-list__item-top-content-name">
                      {name}
                    </span>
                    <img src={stars} alt="stars" />
                  </div>
                </div>
                <p className="reviews-list__item-text">{desc}</p>
              </div>
            );
          })}
        </div>

        <div className="reviews-arrows">
          <button onClick={prev} className="reviews-arrows-btn">
            <img
              className="reviews-arrows-btn__icon"
              src={arrow_left}
              alt="arrow-left"
            />
          </button>
          <button onClick={next} className="reviews-arrows-btn">
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

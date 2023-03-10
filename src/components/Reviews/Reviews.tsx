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
    setItemInfo(reviews);
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
        setCurrentIndex(3);
        setItemInfo(reviews.slice(3, 6));
        break;
      case 3:
        setCurrentIndex(4);
        setItemInfo(reviews.slice(4, 7));
        break;
      case 4:
        setCurrentIndex(5);
        setItemInfo(reviews.slice(5, 8));
        break;
      case 5:
        setCurrentIndex(6);
        setItemInfo(reviews.slice(6, 9));
        break;
      case 6:
        setCurrentIndex(7);
        setItemInfo(reviews.slice(7, 10));
        break;
      case 7:
        setCurrentIndex(0);
        setItemInfo(reviews.slice(0, 3));
        break;
    }
  };

  const buttonDown = () => {
    switch (currentIndex) {
      case 0:
        setCurrentIndex(7);
        setItemInfo(reviews.slice(7, 10));
        break;
      case 1:
        setCurrentIndex(0);
        setItemInfo(reviews.slice(0, 3));
        break;
      case 2:
        setCurrentIndex(1);
        setItemInfo(reviews.slice(1, 4));
        break;
      case 3:
        setCurrentIndex(2);
        setItemInfo(reviews.slice(2, 5));
        break;
      case 4:
        setCurrentIndex(3);
        setItemInfo(reviews.slice(3, 6));
        break;
      case 5:
        setCurrentIndex(4);
        setItemInfo(reviews.slice(4, 7));
        break;
      case 6:
        setCurrentIndex(5);
        setItemInfo(reviews.slice(5, 8));
        break;
      case 7:
        setCurrentIndex(6);
        setItemInfo(reviews.slice(6, 9));
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
            const { id, img } = review;
            return <ReviewCard key={id} currentIndex={index} img={img} />;
          })}
        </div>
        <div className="reviews-moblist">
          {itemInfo.slice(0, 9).map((review: General.Review, index: number) => {
            const { id, img } = review;
            return <ReviewCard key={id} currentIndex={index} img={img} />;
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

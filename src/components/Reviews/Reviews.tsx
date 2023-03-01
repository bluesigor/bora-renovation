import { useEffect, useState } from "react";

import ReviewCard from "../ReviewCard";
import { General } from "../../models";

import { reviews } from "../../core/constants/reviews";

import arrow_left from "../../assets/images/reviews/arrow-left.svg";
import arrow_right from "../../assets/images/reviews/arrow-right.svg";
import { useAppContext } from "../../context/AppContext";

const Reviews = () => {
  const [itemInfo, setItemInfo] = useState<any>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [switcher, setSwitcher] = useState(true);

  // const updateIndex = () => {
  //   currentIndex === 3 ? setCurrentIndex(1) : setCurrentIndex(currentIndex + 1);
  // };

  console.log(currentIndex, itemInfo, switcher);

  useEffect(() => {
    setItemInfo(reviews[0]);
  }, []);

  const { openReviewModal } = useAppContext();

  const buttonDown = () => {
    switch (currentIndex) {
      case 0:
        setCurrentIndex(2);
        setSwitcher(false);
        setItemInfo(reviews[3]);
        break;

      case 1:
        setCurrentIndex(3);
        setSwitcher(false);
        setItemInfo(reviews[2]);
        break;

      case 2:
        setCurrentIndex(1);
        setSwitcher(false);
        setItemInfo(reviews[1]);
        break;

      case 3:
        setCurrentIndex(2);
        setSwitcher(false);
        setItemInfo(reviews[3]);
        break;

      default:
        return;
    }
  };

  const buttonUp = () => {
    switch (currentIndex) {
      case 0:
        setCurrentIndex(1);
        setSwitcher(false);
        setItemInfo(reviews[0]);
        break;

      case 1:
        setCurrentIndex(2);
        setSwitcher(false);
        setItemInfo(reviews[1]);
        break;

      case 2:
        setCurrentIndex(3);
        setSwitcher(false);
        setItemInfo(reviews[2]);
        break;

      case 3:
        setCurrentIndex(1);
        setSwitcher(false);
        setItemInfo(reviews[0]);
        break;

      default:
        return;
    }
  };

  return (
    <section className="reviews">
      <div className="wrapper-reviews">
        <div className="reviews-list">
          {reviews.map((review: General.Review, index: number) => {
            const { avatar, id, desc, name } = review;

            return (
              <ReviewCard
                key={id}
                avatar={avatar}
                currentIndex={currentIndex}
                id={id}
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

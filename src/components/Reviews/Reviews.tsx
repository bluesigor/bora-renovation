import { useAppContext } from "../../context/AppContext";
import ReviewCard from "../ReviewCard";

import { General } from "../../models";

import arrow_left from "../../assets/images/reviews/arrow-left.svg";
import arrow_right from "../../assets/images/reviews/arrow-right.svg";

import useMeasures from "../../core/hooks/useMeasures";
import useReviews from "../../core/hooks/useReviews";

const Reviews = () => {
  const { setIsModalOpen, setModalType } = useAppContext();
  const { innerWidth } = useMeasures();

  const { buttonDown, buttonUp, itemInfo } = useReviews();

  return (
    <section className="reviews">
      <div className="wrapper-reviews">
        {innerWidth < 768 && (
          <h1 className="reviews__title">
            Swipe right to read <br /> our reviews
          </h1>
        )}
        <div className="reviews-list">
          {itemInfo.slice(0, 3).map((review: General.Review, index: number) => {
            const { id, name, text } = review;
            return (
              <ReviewCard
                key={id}
                currentIndex={index}
                name={name}
                text={text}
              />
            );
          })}
        </div>
        <div className="reviews-moblist">
          {itemInfo.map((review: General.Review, index: number) => {
            const { id, name, text } = review;
            return (
              <ReviewCard
                key={id}
                currentIndex={index}
                name={name}
                text={text}
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
          onClick={() => {
            setIsModalOpen(true);
            setModalType("review");
          }}
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

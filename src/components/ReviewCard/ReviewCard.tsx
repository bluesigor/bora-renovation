import useMeasures from "../../core/hooks/useMeasures";

type ReviewCardProps = {
  img: string;
  currentIndex: number;
};

const ReviewCard = ({ img, currentIndex }: ReviewCardProps) => {
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
      <div className="reviews-list__item-top">
        <img
          src={img}
          alt={`${img}`}
          className={
            currentIndex === 1
              ? "reviews-list__item-top-avatar"
              : "reviews-list__item-top-avatar-active"
          }
        />
      </div>
    </div>
  );
};

export default ReviewCard;

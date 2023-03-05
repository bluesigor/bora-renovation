import stars from "../../assets/images/reviews/stars.svg";
import useMeasures from "../../core/hooks/useMeasures";

type ReviewCardProps = {
  avatar: string;
  name: string;
  desc: string;
  currentIndex: number;
};

const ReviewCard = ({ avatar, name, desc, currentIndex }: ReviewCardProps) => {
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
          src={avatar}
          alt={`${avatar}`}
          className="reviews-list__item-top-avatar"
        />
        <div className="reviews-list__item-top-content">
          <span className="reviews-list__item-top-content-name">{name}</span>
          <img src={stars} alt="stars" />
        </div>
      </div>
      <p className="reviews-list__item-text">{desc}</p>
    </div>
  );
};

export default ReviewCard;

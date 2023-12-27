import { useState } from "react";

import { reviews } from "../constants/reviews";
import { General } from "../../models";

const useReviews = () => {
  const [itemInfo, setItemInfo] = useState<General.Review[]>(reviews);
  const [currentIndex, setCurrentIndex] = useState(0);

  const buttonUp = () => {
    const nextIndex = (currentIndex + 1) % reviews.length;
    setCurrentIndex(nextIndex);
    setItemInfo(reviews.slice(nextIndex, nextIndex + 3));
    if (currentIndex === 16) {
      setCurrentIndex(0);
      setItemInfo(reviews.slice(0, 3));
    }
  };

  const buttonDown = () => {
    const nextIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    setCurrentIndex(nextIndex);
    setItemInfo(reviews.slice(nextIndex, nextIndex + 3));
    if (currentIndex === 0) {
      setCurrentIndex(16);
      setItemInfo(reviews.slice(reviews.length - 3, reviews.length));
    }
  };
  return { buttonDown, buttonUp, itemInfo };
};

export default useReviews;

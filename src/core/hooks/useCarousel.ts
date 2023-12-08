import { useEffect, useState } from "react";

import { collection } from "../constants/collection";

import { General } from "../../models";

const useCarousel = () => {
  const [loansInfo, setLoansInfo] = useState<General.Image[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLoansInfo(collection.slice(currentIndex, currentIndex + 3));
  }, [currentIndex]);

  const onNext = () => {
    switch (currentIndex) {
      case currentIndex:
        if (currentIndex > 105) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        setLoansInfo(collection.slice(currentIndex + 1, currentIndex + 3));
        break;
      default:
        return;
    }
  };

  const onPrev = () => {
    switch (currentIndex) {
      case currentIndex:
        if (currentIndex >= 1) {
          setCurrentIndex(currentIndex - 1);
        } else {
          setCurrentIndex(106);
        }
        setLoansInfo(collection.slice(currentIndex, currentIndex + 3));
        break;
      default:
        return;
    }
  };

  return { onNext, onPrev, loansInfo, currentIndex };
};

export default useCarousel;

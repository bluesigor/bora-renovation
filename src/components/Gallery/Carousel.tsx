import useCarousel from "../../core/hooks/useCarousel";
import { collection } from "../../core/constants/collection";

import { useAppContext } from "../../context/AppContext";

import { General } from "../../models";

import prev from "../../assets/images/collection/prev.svg";
import next from "../../assets/images/collection/next.svg";

const Carousel = () => {
  const { setImageData, setIsModalOpen, setModalType } = useAppContext();

  const { currentIndex, loansInfo, onNext, onPrev } = useCarousel();

  return (
    <div className="carousel">
      {loansInfo.length > 0 && (
        <div className="carousel-wrapper">
          <div className="carousel-wrapper-slides">
            {loansInfo.map(({ id, src }: General.Image, index: number) => (
              <img
                onClick={() => {
                  setModalType("image");
                  setIsModalOpen(true);
                  setImageData({ id, src, index });
                }}
                key={id}
                className={index === 1 ? "carousel-img-active" : "carousel-img"}
                alt={src}
                src={src}
              />
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-controls__btn" onClick={onPrev}>
              <img
                src={prev}
                alt="prev"
                className="carousel-controls__btn-icon"
              />
            </button>
            <button className="carousel-controls__btn" onClick={onNext}>
              <img
                src={next}
                alt="next"
                className="carousel-controls__btn-icon"
              />
            </button>
          </div>
          {currentIndex < 6 && (
            <ul className="carousel-wrapper-list">
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[1].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[2].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[3].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[4].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[5].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[6].src}
                  alt=""
                />
              </li>
            </ul>
          )}
          {currentIndex > 5 && currentIndex < 102 && (
            <ul className="carousel-wrapper-list">
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[currentIndex - 3].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[currentIndex - 2].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[currentIndex - 1].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[currentIndex].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className={
                    currentIndex ===
                    collection.indexOf(collection[currentIndex])
                      ? " carousel-wrapper-list__item-active"
                      : "carousel-wrapper-list__item-logo"
                  }
                  src={collection[currentIndex + 1].src}
                  alt=""
                />
              </li>
              <li className="carousel-wrapper-list__item">
                <img
                  className="carousel-wrapper-list__item-logo"
                  src={collection[currentIndex + 2].src}
                  alt=""
                />
              </li>
            </ul>
          )}
        </div>
      )}
      {currentIndex > 101 && (
        <ul className="carousel-wrapper-list">
          <li className="carousel-wrapper-list__item">
            <img
              className="carousel-wrapper-list__item-logo"
              src={collection[102].src}
              alt=""
            />
          </li>
          <li className="carousel-wrapper-list__item">
            <img
              className="carousel-wrapper-list__item-logo"
              src={collection[103].src}
              alt=""
            />
          </li>
          <li className="carousel-wrapper-list__item">
            <img
              className="carousel-wrapper-list__item-logo"
              src={collection[104].src}
              alt=""
            />
          </li>
          <li className="carousel-wrapper-list__item">
            <img
              className="carousel-wrapper-list__item-logo"
              src={collection[105].src}
              alt=""
            />
          </li>
          <li className="carousel-wrapper-list__item">
            <img
              className="carousel-wrapper-list__item-logo"
              src={collection[106].src}
              alt=""
            />
          </li>
          <li className="carousel-wrapper-list__item">
            <img
              className="carousel-wrapper-list__item-logo"
              src={collection[107].src}
              alt=""
            />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Carousel;

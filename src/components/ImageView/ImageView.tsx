import { useAppContext } from "../../context/AppContext";

import useImageNavigation from "../../core/hooks/useImageNavigation";

import right from "../../assets/images/arr-right.svg";
import left from "../../assets/images/arr-left.svg";
import { memo } from "react";

const ImageView = () => {
  const { isModalOpen, modalType, imageData, closeModal } = useAppContext();
  const { handleNext, handlePrev } = useImageNavigation();

  return (
    <>
      {modalType === "image" && isModalOpen && (
        <div className="quote-modal" onClick={closeModal}>
          <div className="image-wrapper">
            <button className="image-wrapper__close">X</button>
            <img
              onClick={(e) => e.stopPropagation()}
              className="image-large"
              src={imageData.src}
              alt="imageData"
            />
            <button className="control__prev" onClick={handlePrev}>
              <img
                style={{
                  width: "25px",
                }}
                src={left}
                alt="arr-left"
                loading="lazy"
              />
            </button>
            <button className="control__next" onClick={handleNext}>
              <img
                style={{
                  width: "25px",
                }}
                src={right}
                alt="arr-right"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ImageView);

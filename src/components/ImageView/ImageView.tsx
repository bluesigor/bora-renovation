import { useAppContext } from "../../context/AppContext";

import { collection } from "../../core/constants/collection";

import right from "../../assets/images/arr-right.svg";
import left from "../../assets/images/arr-left.svg";

const ImageView = () => {
  const { isModalOpen, modalType, imageData, closeModal, setImageData } =
    useAppContext();

  const handleNext = (e: any) => {
    e.stopPropagation();

    if (imageData.src) {
      if (imageData.index === 107) {
        setImageData({
          ...collection[0],
          index: 0,
        });
      } else {
        setImageData({
          ...collection[imageData?.index + 1],
          index: imageData?.index + 1,
        });
      }
    }
  };

  const handlePrev = (e: any) => {
    e.stopPropagation();

    if (imageData.src) {
      if (imageData.index === 0) {
        setImageData({
          ...collection[collection.length - 1],
          index: collection.length - 1,
        });
      } else {
        setImageData({
          ...collection[imageData?.index - 1],
          index: imageData?.index - 1,
        });
      }
    }
  };

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
              <img src={left} alt="arr-left" />
              {/* <AiOutlineArrowLeft
                size={26}
                style={{
                  color: "black",
                }}
              /> */}
            </button>
            <button className="control__next" onClick={handleNext}>
              <img src={right} alt="arr-right" />
              {/* <AiOutlineArrowRight
                size={26}
                style={{
                  color: "black",
                }}
              /> */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageView;

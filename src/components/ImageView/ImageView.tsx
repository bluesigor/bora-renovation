import { useAppContext } from "../../context/AppContext";

const ImageView = () => {
  const { isModalOpen, modalType, imageData, closeModal } = useAppContext();

  return (
    <>
      {modalType === "image" && isModalOpen && (
        <div className="quote-modal" onClick={closeModal}>
          <div className="image-wrapper">
            {/* <div className="quote-modal-content-top"> */}
            <img
              onClick={(e) => e.stopPropagation()}
              className="image-large"
              src={imageData}
              alt="imageData"
            />
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageView;

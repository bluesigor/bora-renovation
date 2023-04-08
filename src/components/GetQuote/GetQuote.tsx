import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const GetQuote = () => {
  const {
    isVisisble,
    setIsModalOpen,
    setModalType,
    isModalOpen,
    setIsVisisble,
  } = useAppContext();

  useEffect(() => {
    if (isModalOpen) {
      setIsVisisble(false);
    }
  }, [isModalOpen, setIsVisisble]);

  if (isVisisble) {
    return (
      <div className="quote-container">
        <button
          onClick={() => {
            setModalType("quote");
            setIsModalOpen(true);
          }}
          className="quote-container-btn">
          <span className="quote-container-btn__txt">get a quote</span>
        </button>
      </div>
    );
  }
  return null;
};

export default GetQuote;

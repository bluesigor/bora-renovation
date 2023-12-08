import { useEffect } from "react";

import { useAppContext } from "../../context/AppContext";

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
          className="policy-comunicate__btn">
          <span className="policy-comunicate__btn-txt">Get a quote</span>
        </button>
      </div>
    );
  }
  return null;
};

export default GetQuote;

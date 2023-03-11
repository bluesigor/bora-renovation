import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const GetQuote = () => {
  const { isVisisble, openModalQuote, isModalOpen, setIsVisisble } =
    useAppContext();

  useEffect(() => {
    if (isModalOpen) {
      setIsVisisble(false);
    }
  }, [isModalOpen]);

  if (isVisisble) {
    return (
      <div className="quote-container">
        <button onClick={openModalQuote} className="quote-container-btn">
          <span className="quote-container-btn__txt">get a quote</span>
        </button>
      </div>
    );
  }
  return null;
};

export default GetQuote;

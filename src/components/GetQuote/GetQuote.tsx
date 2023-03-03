import { useAppContext } from "../../context/AppContext";

const GetQuote = () => {
  const { isVisisble } = useAppContext();

  if (isVisisble) {
    return (
      <div className="quote-container">
        <button className="quote-container-btn">
          <span className="quote-container-btn__txt">get a quote</span>
        </button>
      </div>
    );
  }
  return null;
};

export default GetQuote;

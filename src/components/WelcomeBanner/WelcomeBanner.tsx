import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

import { getWindowSize } from "../../core/constants/constants";

const WelcomeBanner = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const { openModal } = useAppContext();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <section className="bora__welcome-banner welcome-banner">
      {windowSize.innerWidth > 768 && (
        <div className="welcome-banner-title">
          <h1 className="welcome-banner-title__txt">
            Bora kitchen cabinet renovation
          </h1>
        </div>
      )}
      <div className="welcome-banner-wrapper">
        <div className="welcome-banner-wrapper-outer">
          {windowSize.innerWidth > 768 ? (
            <h4 className="welcome-banner-wrapper-outer__inner">
              high quality cabinets refinishing and <br />
              refacing for your cozy home
            </h4>
          ) : (
            <h4 className="welcome-banner-wrapper-outer__inner">
              quality cabinet refinishing for your cozy home
            </h4>
          )}
          <button
            onClick={openModal}
            className="welcome-banner-wrapper-outer__free-btn">
            <span className="welcome-banner-wrapper-outer__free-btn-txt">
              GET a FREE quote
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;

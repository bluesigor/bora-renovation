import { useAppContext } from "../../context/AppContext";

import useMeasures from "../../core/hooks/useMeasures";

import poster from "../../assets/images/welcome/welcome-banner.svg";
import welcome from "../../assets/videos/main.mp4";

const WelcomeBanner = () => {
  const { openModalQuote, isOpen } = useAppContext();

  const { innerWidth } = useMeasures();

  return (
    <section className="bora__welcome-banner welcome-banner">
      {isOpen ? null : (
        <div className="welcome-banner-title">
          <h1 className="welcome-banner-title__txt">
            Bora kitchen cabinet renovation
          </h1>
        </div>
      )}
      <div className="welcome-banner-wrapper">
        <video
          id="video-player"
          poster={poster}
          autoPlay
          muted
          className="welcome-banner-wrapper-video"
          loop={true}>
          <source src={welcome} type="video/mp4" />
        </video>
        <div className="welcome-banner-wrapper-outer">
          {innerWidth > 768 ? (
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
            onClick={openModalQuote}
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

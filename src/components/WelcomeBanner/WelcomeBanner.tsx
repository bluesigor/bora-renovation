import { useAppContext } from "../../context/AppContext";

import useMeasures from "../../core/hooks/useMeasures";

import poster from "../../assets/images/welcome/welcome-banner.svg";
import welcome from "../../assets/videos/main.mp4";

const WelcomeBanner = () => {
  const { isOpen } = useAppContext();

  const { innerWidth } = useMeasures();

  return (
    <section className="bora__welcome-banner welcome-banner">
      {isOpen ? null : (
        <div className="welcome-banner-title">
          {innerWidth > 1025 && (
            <h1 className="welcome-banner-title__txt">
              Kitchen Cabinet Refinishing and Refacing
            </h1>
          )}
        </div>
      )}
      <div className="welcome-banner-wrapper">
        {innerWidth > 768 && (
          <video
            id="video-player"
            poster={poster}
            autoPlay
            muted
            className="welcome-banner-wrapper-video"
            loop={true}>
            <source src={welcome} type="video/mp4" />
          </video>
        )}
        <div className="welcome-banner-wrapper-outer">
          {innerWidth < 768 && (
            <h4 className="welcome-banner-wrapper-outer__inner">
              <span
                style={{
                  whiteSpace: "nowrap",
                }}>
                PROFESSIONAL KITCHEN CABINET
              </span>{" "}
              <br />
              <span
                style={{
                  whiteSpace: "nowrap",
                }}>
                REFINISHING AND REFACING
              </span>
            </h4>
          )}
          {/* {innerWidth > 768 && (
            <button
              onClick={() => {
                setIsModalOpen(true);
                setModalType("quote");
              }}
              className="welcome-banner-wrapper-outer__free-btn">
              <span className="welcome-banner-wrapper-outer__free-btn-txt">
                GET a FREE quote
              </span>
            </button>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default WelcomeBanner;

import { useState, useRef } from "react";

import about from "../../assets/videos/about-us.mp4";
import poster from "../../assets/images/about/poster.svg";

const AboutUs = () => {
  const [isMore, setIsMore] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const showMore = () => {
    if (isMore) {
      setIsMore(false);
    } else {
      setIsMore(true);
    }
  };

  return (
    <section className="aboutus">
      <div className="aboutus-header">
        <h1 className="aboutus-header__title">About us</h1>
      </div>
      <div className="aboutus-content">
        <div
          className={
            isMore ? "aboutus-content-moredesc" : "aboutus-content-desc"
          }>
          <p className="aboutus-content-desc__txt">
            Bora Renovation is a professional licensed and insured family-owned
            and operated kitchen cabinet refinishing company located in
            Wilmington, DE. Kitchen cabinet refinishing is the only service we
            offer. We invest the necessary time in thorough prep, use
            high-quality factory-grade products, and deliver a factory-like,
            guaranteed finish.
            {isMore && (
              <>
                We don't use rollers and brushes. The entire kitchen (the base,
                doors) we spray with a professional HVLP sprayer which produces
                a surface that cannot be achieved by any other tool. We call our
                company “The best kitchen cabinet refinishing” based on the
                number of five-star reviews left by our previous customers on
                &nbsp;
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.google.com/search?q=bora+renovation&oq=bora+&aqs=chrome.1.69i59l2j35i19i39j69i60j69i61j69i60l3.3632j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89c6e39f182ef821:0xa085e036b2fe82ef,1,,,">
                  Google
                </a>
                &nbsp; and &nbsp;
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.facebook.com/BoraRenovation/reviews/?ref=page_internal">
                  Facebook
                </a>
                . We feel confident in our ability to meet all of your
                expectations and know that you will be more than satisfied when
                we complete your job.
              </>
            )}
          </p>
          <div className="aboutus-content-desc-more">
            <button
              onClick={showMore}
              className="aboutus-content-desc-more__btn">
              {isMore ? (
                <span className="aboutus-content-desc-more__btn-txt">
                  Show less
                </span>
              ) : (
                <span className="aboutus-content-desc-more__btn-txt">
                  Read more
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="aboutus-content-media">
          <video
            controls
            id="video-player"
            ref={videoRef}
            poster={poster}
            className="aboutus-content-media__mov"
            loop>
            <source src={about} type="video/mp4" />
          </video>
          <p className="aboutus-content-media__mov-title">
            Bora kitchen cabinet renovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

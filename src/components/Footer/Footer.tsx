import { useEffect, useState } from "react";

import { useAppContext } from "../../context/AppContext";

import bora_mob from "../../assets/images/footer/bora-mob.svg";
import facebook from "../../assets/images/contact/facebook.svg";
import logo_foot from "../../assets/images/footer/logo-foot.svg";
import to_top_arrow from "../../assets/images/footer/to-top-arrow.svg";
import phone from "../../assets/images/header/phone-icon.svg";
import desk_phone from "../../assets/images/header/desc-phone-icon.svg";
import instagram from "../../assets/images/contact/inst.svg";
import useMeasures from "../../core/hooks/useMeasures";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const { openModalQuote } = useAppContext();
  const { innerWidth } = useMeasures();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    if (currentPosition > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="foot">
      <img className="foot__bora-mob" src={bora_mob} alt="bora_mob" />
      <div className="foot-inner">
        <div className="foot-inner-links">
          <ul className="foot-inner-links-first">
            <li className="foot-inner-links__item">Home</li>
            <li className="foot-inner-links__item">About us</li>
            <li className="foot-inner-links__item">our process</li>
          </ul>
          <ul className="foot-inner-links-second">
            <li className="foot-inner-links__item">gallery</li>
            <li className="foot-inner-links__item">FAQ</li>
            <li className="foot-inner-links__item">Contacts</li>
          </ul>
        </div>
        <div className="foot-inner-controls">
          <div className="foot-inner-controls-logo">
            <img src={logo_foot} alt="logo" />
            <span className="foot-inner-controls-logo__txt">
              © Bora Renovation, LLC |{" "}
              <a
                href="https://www.borarenovation.com/privacy-policy"
                rel="noreferrer"
                target="_blank">
                Privacy Policy
              </a>
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className={
              showButton
                ? "foot-inner-controls__btn-up"
                : "foot-inner-controls__btn-up"
            }>
            <img src={to_top_arrow} alt="goup" />
          </button>
          <div className="foot-inner-controls-end">
            <button className="foot-inner-controls-end-phone">
              {innerWidth > 768 ? (
                <img src={desk_phone} alt="phone" />
              ) : (
                <img src={phone} alt="phone" />
              )}

              <a href="tel:+13022441338">302-244-1338</a>
            </button>
            <button
              onClick={openModalQuote}
              className="foot-inner-controls-end-quote">
              <span>Get a free quote</span>
            </button>
            <a
              href="mailto:info@borarenovation.com"
              className="foot-inner-controls-end__mail">
              info@borarenovation.com
            </a>
            <div className="foot-inner-controls-end-socials">
              <img src={instagram} alt="instagram" />
              <a
                href="https://www.facebook.com/BoraRenovation/reviews/?ref=page_internal"
                rel="noreferrer"
                target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="foot__copyrights">
        © Bora Renovation, LLC |{" "}
        <a href="https://www.borarenovation.com/privacy-policy">
          Privacy Policy
        </a>
      </span>
    </footer>
  );
};

export default Footer;

import { Link, useNavigate } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

import bora_mob from "../../assets/images/bora-04-01.svg";
import facebook from "../../assets/images/contact/facebook.svg";
import logo_foot from "../../assets/images/footer/logo-foot.svg";
import phone from "../../assets/images/header/phone-icon.svg";
import instagram from "../../assets/images/contact/inst.svg";

import useMeasures from "../../core/hooks/useMeasures";

const Footer = () => {
  const navigate = useNavigate();

  const { setIsModalOpen, setModalType } = useAppContext();
  const { innerWidth } = useMeasures();

  return (
    <footer className="foot">
      <img
        className="foot__bora-mob"
        src={bora_mob}
        width="185px"
        alt="bora_mob"
      />
      <div className="foot-inner">
        <div className="foot-inner-links">
          <ul className="foot-inner-links-first">
            <li
              className="foot-inner-links__item"
              onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className="foot-inner-links__item"
              onClick={() =>
                window.location.pathname.includes("/gallery") ||
                window.location.pathname.includes("/privacy-policy")
                  ? navigate("/")
                  : window.scrollTo(0, 1500)
              }>
              About us
            </li>
            <li
              className="foot-inner-links__item"
              onClick={() =>
                window.location.pathname.includes("/gallery") ||
                window.location.pathname.includes("/privacy-policy")
                  ? navigate("/")
                  : innerWidth < 768
                  ? window.scrollTo(0, 2200)
                  : window.scrollTo(0, 2400)
              }>
              our process
            </li>
          </ul>
          <ul className="foot-inner-links-second">
            <li
              className="foot-inner-links__item"
              onClick={() => navigate("/gallery")}>
              gallery
            </li>
            <li
              className="foot-inner-links__item"
              onClick={() =>
                window.location.pathname.includes("/gallery") ||
                window.location.pathname.includes("/privacy-policy")
                  ? navigate("/")
                  : innerWidth < 768
                  ? window.scrollTo(0, 4250)
                  : window.scrollTo(0, 4900)
              }>
              FAQ'S
            </li>
            <li
              className="foot-inner-links__item"
              onClick={() =>
                window.location.pathname.includes("/gallery") ||
                window.location.pathname.includes("/privacy-policy")
                  ? navigate("/")
                  : innerWidth < 768
                  ? window.scrollTo(0, 6350)
                  : window.scrollTo(0, 7600)
              }>
              Contact us
            </li>
          </ul>
        </div>
        <div className="foot-inner-controls">
          <div className="foot-inner-controls-logo">
            <img src={logo_foot} alt="logo" />
            <span className="foot-inner-controls-logo__txt">
              © Bora Renovations, LLC |{" "}
              <Link to="/privacy-policy">Privacy Policy</Link>
            </span>
          </div>

          <div className="foot-inner-controls-end">
            <button className="foot-inner-controls-end-phone">
              <img src={phone} alt="phone" />
              <a href="tel:+13022441338">302-244-1338</a>
            </button>
            <button
              onClick={() => {
                setModalType("quote");
                setIsModalOpen(true);
              }}
              className="foot-inner-controls-end-quote">
              <span>Get a free quote</span>
            </button>
            <a
              href="mailto:borarernovations@gmail.com"
              className="foot-inner-controls-end__mail">
              borarernovations@gmail.com
            </a>
            <div className="foot-inner-controls-end-socials">
              <a
                href="https://instagram.com/bora_renovations"
                rel="noreferrer"
                target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.facebook.com/BoraRenovations"
                rel="noreferrer"
                target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className="foot__copyrights">
        © Bora Renovations, LLC |{" "}
        <Link to="privacy-policy">Privacy Policy</Link>
      </span>
    </footer>
  );
};

export default Footer;

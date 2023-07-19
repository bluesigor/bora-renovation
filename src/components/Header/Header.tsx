import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

import bora_logo from "../../assets/images/header/bora-logo.svg";

import useMeasures from "../../core/hooks/useMeasures";
import { useAppContext } from "../../context/AppContext";

// const logo = require("../../assets/images/header/bora.svg");

const Header = () => {
  const { innerWidth } = useMeasures();
  const navigate = useNavigate();
  const { openHamb, isOpen, closeHamb, setIsModalOpen, setModalType } =
    useAppContext();

  function handleScroll(height: number) {
    window.scrollTo(0, height);
  }

  useEffect(() => {
    if (innerWidth > 1025) {
      closeHamb();
    }
  }, [innerWidth, closeHamb]);

  return (
    <header
      style={{
        height: innerWidth < 768 ? (isOpen ? "461px" : "210px") : "175px",
      }}
      className="bora-header">
      <Link to="/">
        <img src={bora_logo} alt="bora-logo" className="bora-header__logo" />
      </Link>
      <div className="bora-header-main">
        <div className="welcome-banner-title">
          {innerWidth > 1025 && (
            <h1 className="welcome-banner-title__txt">
              Kitchen Cabinet Refinishing and Refacing
            </h1>
          )}
        </div>
        <div className="bora-header-nav-controls">
          <nav className="bora-header__navbar navbar">
            <ul className="navbar-list">
              <Link to="/">
                <li className="navbar-list__item">Home</li>
              </Link>
              <li
                onClick={() =>
                  window.location.pathname.includes("/gallery") ||
                  window.location.pathname.includes("/privacy-policy")
                    ? navigate("/")
                    : handleScroll(1500)
                }
                className="navbar-list__item">
                About us
              </li>
              <li
                onClick={() =>
                  window.location.pathname.includes("/gallery") ||
                  window.location.pathname.includes("/privacy-policy")
                    ? navigate("/")
                    : handleScroll(2400)
                }
                className="navbar-list__item">
                our process
              </li>
              <li
                onClick={() => {
                  window.location.pathname.includes("/gallery") ||
                  window.location.pathname.includes("/privacy-policy")
                    ? navigate("/")
                    : handleScroll(4300);
                  navigate("/gallery");
                }}
                className="navbar-list__item">
                gallery
              </li>
              <li
                onClick={() =>
                  window.location.pathname.includes("/gallery") ||
                  window.location.pathname.includes("/privacy-policy")
                    ? navigate("/")
                    : handleScroll(4900)
                }
                className="navbar-list__item">
                FAQ’S
              </li>
              <li
                onClick={() =>
                  window.location.pathname.includes("/gallery") ||
                  window.location.pathname.includes("/privacy-policy")
                    ? navigate("/")
                    : handleScroll(7600)
                }
                className="navbar-list__item">
                Contact us
              </li>
            </ul>
          </nav>
          {innerWidth < 1025 ? (
            <div className="bora-header-end-wrapper">
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(true);
                  setModalType("quote");
                }}
                className="bora-header__contact-btn">
                {/* <img
              src={phone_icon}
              alt="phone-icon"
              className="bora-header__contact-btn__icon"
            /> */}
                <span
                  className="bora-header__contact-btn__txt"
                  // href="tel:+13022441338"
                >
                  Get a free quote
                </span>
              </button>
              <div className="bora-header-burger">
                <div className="bora-header-burger-wrapper ">
                  <Hamburger
                    size={28}
                    duration={0.5}
                    easing="ease-in"
                    label="Show menu"
                    toggled={isOpen}
                    toggle={isOpen ? closeHamb : openHamb}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* <button type="button" className="bora-header__contact-btn">
            <img
              src={phone_icon}
              alt="phone-icon"
              className="bora-header__contact-btn__icon"
            />
            <a
              className="bora-header__contact-btn__txt"
              href="tel:+13022441338">
              302-244-1338
            </a>
          </button> */}

              <div className="policy-comunicate">
                <button
                  onClick={() => {
                    setModalType("quote");
                    setIsModalOpen(true);
                  }}
                  className="policy-comunicate__btn">
                  <span className="policy-comunicate__btn-txt">
                    Get a quote
                  </span>
                </button>
              </div>

              <div className="bora-header-burger">
                <div className="bora-header-burger-wrapper ">
                  <Hamburger
                    size={28}
                    duration={0.5}
                    easing="ease-in"
                    label="Show menu"
                    toggled={isOpen}
                    toggle={isOpen ? closeHamb : openHamb}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {isOpen && (
        <ul className="navbar-moblist">
          <li>
            <Link onClick={closeHamb} to="/" className="navbar-moblist__item">
              Home
            </Link>
          </li>
          <li>
            {window.location.pathname.includes("gallery") ||
            window.location.pathname.includes("privacy-policy") ? (
              <Link
                to="/"
                onClick={() => {
                  closeHamb();
                  handleScroll(1900);
                }}
                className="navbar-moblist__item">
                About us
              </Link>
            ) : (
              <button
                onClick={() => {
                  closeHamb();
                  handleScroll(1500);
                }}
                className="navbar-moblist__item">
                About us
              </button>
            )}
          </li>
          <li>
            {window.location.pathname.includes("gallery") ||
            window.location.pathname.includes("privacy-policy") ? (
              <Link
                to="/"
                onClick={() => {
                  closeHamb();
                  handleScroll(2700);
                }}
                className="navbar-moblist__item">
                our process
              </Link>
            ) : (
              <button
                onClick={() => {
                  closeHamb();
                  handleScroll(2100);
                }}
                className="navbar-moblist__item">
                our process
              </button>
            )}
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => {
                closeHamb();
              }}
              className="navbar-moblist__item">
              gallery
            </Link>
          </li>
          <li>
            {window.location.pathname.includes("gallery") ||
            window.location.pathname.includes("privacy-policy") ? (
              <Link
                to="/"
                onClick={() => {
                  closeHamb();
                  handleScroll(4900);
                }}
                className="navbar-moblist__item">
                FAQ’s
              </Link>
            ) : (
              <button
                onClick={() => {
                  closeHamb();
                  handleScroll(4200);
                }}
                className="navbar-moblist__item">
                FAQ’s
              </button>
            )}
          </li>
          <li>
            {window.location.pathname.includes("gallery") ? (
              <Link
                to="/"
                onClick={() => {
                  closeHamb();
                  handleScroll(7700);
                }}
                className="navbar-moblist__item">
                Contact us
              </Link>
            ) : (
              <button
                onClick={() => {
                  closeHamb();
                  handleScroll(6400);
                }}
                className="navbar-moblist__item">
                Contact us
              </button>
            )}
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;

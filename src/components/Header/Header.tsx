import { useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import bora_logo from "../../assets/images/header/bora-logo.svg";
import phone_icon from "../../assets/images/header/phone-icon.svg";

import useMeasures from "../../core/hooks/useMeasures";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { innerWidth } = useMeasures();

  const { openHamb, isOpen, closeHamb } = useAppContext();

  function handleScroll(height: number) {
    window.scrollTo(0, height);
  }

  useEffect(() => {
    if (innerWidth > 768) {
      closeHamb();
    }
  }, [innerWidth, closeHamb]);

  return (
    <header
      style={{
        height: isOpen ? "361px" : "137px",
      }}
      className="bora-header">
      <Link to="/">
        <img src={bora_logo} alt="bora-logo" className="bora-header__logo" />
      </Link>
      <nav className="bora-header__navbar navbar">
        <ul className="navbar-list">
          <Link to="/">
            <li className="navbar-list__item">Home</li>
          </Link>
          <li onClick={() => handleScroll(1500)} className="navbar-list__item">
            About us
          </li>
          <li onClick={() => handleScroll(2400)} className="navbar-list__item">
            our process
          </li>
          <li onClick={() => handleScroll(4300)} className="navbar-list__item">
            <Link to="/gallery">gallery</Link>
          </li>
          <li onClick={() => handleScroll(4900)} className="navbar-list__item">
            FAQ’s
          </li>
          <li onClick={() => handleScroll(7600)} className="navbar-list__item">
            Contacts
          </li>
        </ul>
      </nav>
      <button type="button" className="bora-header__contact-btn">
        <img
          src={phone_icon}
          alt="phone-icon"
          className="bora-header__contact-btn__icon"
        />
        <a className="bora-header__contact-btn__txt" href="tel:+13022441338">
          302-244-1338
        </a>
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
                  handleScroll(1900);
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
                  handleScroll(2700);
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
                  handleScroll(4900);
                }}
                className="navbar-moblist__item">
                FAQ’s
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
                  handleScroll(7700);
                }}
                className="navbar-moblist__item">
                Contacts
              </Link>
            ) : (
              <button
                onClick={() => {
                  closeHamb();
                  handleScroll(7700);
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

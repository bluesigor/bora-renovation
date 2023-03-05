import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

import bora_logo from "../../assets/images/header/bora-logo.svg";
import phone_icon from "../../assets/images/header/phone-icon.svg";
import useMeasures from "../../core/hooks/useMeasures";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { innerWidth } = useMeasures();

  function handleScroll(height: number) {
    window.scrollTo(0, height);
  }

  useEffect(() => {
    if (innerWidth > 768) {
      setOpen(false);
    }
  }, [innerWidth]);

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
          <li onClick={() => handleScroll(1800)} className="navbar-list__item">
            About us
          </li>
          <li onClick={() => handleScroll(2700)} className="navbar-list__item">
            our process
          </li>
          <li onClick={() => handleScroll(4500)} className="navbar-list__item">
            gallery
          </li>
          <li onClick={() => handleScroll(5700)} className="navbar-list__item">
            FAQ’s
          </li>
          <li onClick={() => handleScroll(8400)} className="navbar-list__item">
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
        <span className="bora-header__contact-btn__txt"> 302-244-1338 </span>
      </button>
      <div className="bora-header-burger">
        <div className="bora-header-burger-wrapper ">
          <Hamburger
            size={28}
            duration={0.4}
            easing="ease-in"
            label="Show menu"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="navbar-moblist">
          <li>
            <Link to="/" className="navbar-moblist__item">
              Home
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleScroll(2000)}
              className="navbar-moblist__item">
              About us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll(2700)}
              className="navbar-moblist__item">
              our process
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll(4100)}
              className="navbar-moblist__item">
              gallery
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll(5000)}
              className="navbar-moblist__item">
              FAQ’s
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll(7700)}
              className="navbar-moblist__item">
              Contacts
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;

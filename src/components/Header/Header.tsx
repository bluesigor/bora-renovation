import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";

import useMeasures from "../../core/hooks/useMeasures";
import { useAppContext } from "../../context/AppContext";

import logo from "../../assets/images/bora-04-01.svg";
import HamburgerMenu from "./HamburgerMenu";

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
        <img src={logo} alt="bora-logo" className="bora-header__logo" />
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
                    : handleScroll(2140)
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
                    : handleScroll(4670)
                }
                className="navbar-list__item">
                FAQ’S
              </li>
              <li
                onClick={() =>
                  window.location.pathname.includes("/gallery") ||
                  window.location.pathname.includes("/privacy-policy")
                    ? navigate("/")
                    : handleScroll(7400)
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
                <span className="bora-header__contact-btn__txt">
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
      {isOpen && <HamburgerMenu onClose={closeHamb} onScroll={handleScroll} />}
    </header>
  );
};

export default Header;

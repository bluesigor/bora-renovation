import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

import handleScroll from "../../core/helpers/scrollTo";

const HeaderLinks = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default memo(HeaderLinks);

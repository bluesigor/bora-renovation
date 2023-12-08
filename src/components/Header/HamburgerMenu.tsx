import React, { FC } from "react";
import { Link } from "react-router-dom";

type HamburgerMenuProps = {
  onClose: () => void;
  onScroll: (height: number) => void;
};

const HamburgerMenu: FC<HamburgerMenuProps> = ({ onClose, onScroll }) => {
  return (
    <ul className="navbar-moblist">
      <li>
        <Link onClick={onClose} to="/" className="navbar-moblist__item">
          Home
        </Link>
      </li>
      <li>
        {window.location.pathname.includes("gallery") ||
        window.location.pathname.includes("privacy-policy") ? (
          <Link
            to="/"
            onClick={() => {
              onClose();
              onScroll(1900);
            }}
            className="navbar-moblist__item">
            About us
          </Link>
        ) : (
          <button
            onClick={() => {
              onClose();
              onScroll(1500);
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
              onClose();
              onScroll(2700);
            }}
            className="navbar-moblist__item">
            our process
          </Link>
        ) : (
          <button
            onClick={() => {
              onClose();
              onScroll(2100);
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
            onClose();
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
              onClose();
              onScroll(4900);
            }}
            className="navbar-moblist__item">
            FAQ’s
          </Link>
        ) : (
          <button
            onClick={() => {
              onClose();
              onScroll(4200);
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
              onClose();
              onScroll(7700);
            }}
            className="navbar-moblist__item">
            Contact us
          </Link>
        ) : (
          <button
            onClick={() => {
              onClose();
              onScroll(6400);
            }}
            className="navbar-moblist__item">
            Contact us
          </button>
        )}
      </li>
    </ul>
  );
};

export default HamburgerMenu;

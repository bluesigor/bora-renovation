import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import right from "../../assets/images/main-gallery/arrow-right.svg";
import left from "../../assets/images/main-gallery/arrow-left.svg";
import taking from "../../assets/images/process/taking.svg";
import install from "../../assets/images/process/install.svg";
import cleaning from "../../assets/images/process/cleaning.svg";
import materials from "../../assets/images/process/materials.svg";
import protect from "../../assets/images/process/protect.svg";
import sand from "../../assets/images/process/sand.svg";

const items = [
  { id: 1, src: taking },
  { id: 2, src: install },
  { id: 3, src: cleaning },
  { id: 4, src: materials },
  { id: 5, src: protect },
  { id: 6, src: sand },
];

const Carousel = () => {
  const [itemInfo, setItemInfo] = useState<any>({});
  const [currentIndex, setCurrentIndex] = useState(1);
  const [switcher, setSwitcher] = useState(true);

  const updateIndex = () => {
    currentIndex === 3 ? setCurrentIndex(1) : setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setItemInfo(items[0]);
  }, []);

  useEffect(() => {
    if (switcher) {
      const slide = setTimeout(() => {
        currentIndex === 1
          ? setItemInfo(items[1])
          : currentIndex === 2
          ? setItemInfo(items[2])
          : setItemInfo(items[3]);
        updateIndex();
      }, 4000);

      return () => {
        clearTimeout(slide);
      };
    }
  }, [itemInfo]);

  const buttonDown = () => {
    switch (currentIndex) {
      case 0:
        setCurrentIndex(2);
        setSwitcher(false);
        setItemInfo(items[3]);
        break;

      case 1:
        setCurrentIndex(3);
        setSwitcher(false);
        setItemInfo(items[2]);
        break;

      case 2:
        setCurrentIndex(1);
        setSwitcher(false);
        setItemInfo(items[1]);
        break;

      case 3:
        setCurrentIndex(2);
        setSwitcher(false);
        setItemInfo(items[3]);
        break;

      default:
        return;
    }
  };

  const buttonUp = () => {
    switch (currentIndex) {
      case 0:
        setCurrentIndex(1);
        setSwitcher(false);
        setItemInfo(items[0]);
        break;

      case 1:
        setCurrentIndex(2);
        setSwitcher(false);
        setItemInfo(items[1]);
        break;

      case 2:
        setCurrentIndex(3);
        setSwitcher(false);
        setItemInfo(items[2]);
        break;

      case 3:
        setCurrentIndex(1);
        setSwitcher(false);
        setItemInfo(items[0]);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <div>
        <button onClick={buttonDown}>
          <img src={left} alt="prev" />
        </button>
        <section>
          <ReactSVG src={items[currentIndex - 1].src} />
          <ReactSVG src={items[currentIndex].src} />
          <ReactSVG src={items[currentIndex + 1].src} />
        </section>
        <button onClick={buttonUp} type="button">
          <img src={right} alt="next" />
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setItemInfo(items[1]);
            setCurrentIndex(1);
            setSwitcher(false);
          }}
          className={
            currentIndex === 0 || currentIndex === 1
              ? "banner-section-switch-choosen-btn"
              : "banner-section-switch-btn"
          }></button>
        <button
          onClick={() => {
            setItemInfo(items[2]);
            setCurrentIndex(2);
            setSwitcher(false);
          }}
          className={
            currentIndex === 2
              ? "banner-section-switch-choosen-btn"
              : "banner-section-switch-btn"
          }></button>
        <button
          onClick={() => {
            setItemInfo(items[3]);
            setCurrentIndex(3);
            setSwitcher(false);
          }}
          className={
            currentIndex === 3
              ? "banner-section-switch-choosen-btn"
              : "banner-section-switch-btn"
          }></button>
      </div>
    </>
  );
};

export default Carousel;

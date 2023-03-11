import { useEffect } from "react";

import Carousel from "./Carousel";
import useMeasures from "../../core/hooks/useMeasures";
import MobGallery from "../MobGallery";

const Gallery = () => {
  const { innerWidth } = useMeasures();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      return window.scrollTo(0, 200);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page-gallery">
      <div className="page-gallery-top">
        <span className="page-gallery-top__home">Home</span>
        <div className="page-gallery-top__line" />
        <span className="page-gallery-top__gallery">Gallery</span>
      </div>
      <div className="page-gallery-header">
        <div className="page-gallery-header-content">
          <h3 className="page-gallery-header-content__title">Work gallery</h3>
          <h5 className="page-gallery-header-content__sub">
            WHAT WE DO, WE CAN BE PROUD OF!
          </h5>
        </div>
      </div>
      <div className="page-gallery__carousel-main carousel-main">
        {innerWidth > 768 ? <Carousel /> : <MobGallery />}
      </div>
    </section>
  );
};

export default Gallery;

import { useEffect } from "react";

import Carousel from "./Carousel";
import useMeasures from "../../core/hooks/useMeasures";
import MobGallery from "../MobGallery";

import instagram from "../../assets/images/contact/inst.svg";
import facebook from "../../assets/images/contact/facebook.svg";

const Gallery = () => {
  const { innerWidth } = useMeasures();

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      return window.scrollTo(0, 0);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page-gallery">
      <div className="page-gallery-header">
        <div className="page-gallery-header-content">
          <h5 className="page-gallery-header-content__sub">
            WHAT WE DO, <br /> WE CAN BE PROUD OF!
          </h5>
        </div>
      </div>
      <div className="page-gallery__carousel-main carousel-main">
        {innerWidth > 768 ? <Carousel /> : <MobGallery />}
      </div>
      <div className="page-gallery__social social">
        <p>
          Follow us on social media to see more pictures and videos of our work
        </p>
        <div className="foot-inner-controls-end-socials">
          <a
            href="https://instagram.com/bora_renovation?igshid=MzRlODBiNWFlZA=="
            rel="noreferrer"
            target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.facebook.com/BoraRenovation?mibextid=LQQJ4d"
            rel="noreferrer"
            target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

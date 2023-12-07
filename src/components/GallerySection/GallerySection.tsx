import { useState } from "react";
import { Link } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

import useMeasures from "../../core/hooks/useMeasures";
import { collection } from "../../core/constants/collection";

import prev from "../../assets/images/collection/prev.svg";
import next from "../../assets/images/collection/next.svg";

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(30);

  const { innerWidth } = useMeasures();

  const handleNext = () => {
    currentImage === 50
      ? setCurrentImage(30)
      : setCurrentImage(currentImage + 1);
  };

  const handlePrev = () => {
    currentImage === 30
      ? setCurrentImage(50)
      : setCurrentImage(currentImage - 1);
  };

  console.log();

  return (
    <section className="gallery">
      <div className="gallery-title">
        <h1 className="gallery-title__txt">Work gallery</h1>
      </div>
      <div className="gallery-content">
        <div className="gallery-content-desc">
          <p className="gallery-content-desc__txt">
            Cabinet refinishing requires a higher level of skill than what most
            house painting companies have. It’s more than just applying paint
            with a brush or painting walls with a roller.
            <br /> <br />
            Bora Renovations uses only factory-grade products and specialized
            equipment which allows us to finish the project fast and
            effectively. You’ll be amazed at how simple it is to update your
            kitchen cabinets and give it that amazing luxurious feel without a
            complete remodeling.
            <br /> <br />
            Take a look at our gallery of pictures to get inspired for your
            future project.
          </p>
        </div>

        <div className="gallery-content-wrapp">
          <div className="gallery-content-wrapp-pics">
            <img
              src={require("../../assets/images/main-gallery/image-first.JPG")}
              alt=""
            />
            <img
              src={require("../../assets/images/main-gallery/image-second.JPEG")}
              alt=""
            />
          </div>
          <Link
            to="gallery"
            onClick={() => {
              ReactPixel.track("ClickButton", {
                buttonName: "Step to gallery",
              });
            }}
            style={{
              marginTop: "20px",
            }}
            className="aboutus-content-desc-more__btn">
            <span className="gallery-view-btn__txt">View full gallery</span>
          </Link>
        </div>
      </div>
      <div className="gallery-mob">
        <div className="gallery-mob-desc">
          <p className="gallery-mob-desc__txt">
            Cabinet refinishing requires a higher level of skill than what most
            house painting companies have. It’s more than just applying paint
            with a brush or painting walls with a roller. Bora Renovations uses
            only factory-grade products and specialized equipment.
          </p>
        </div>
        <div className="gallery-mob-logo">
          <button
            type="button"
            onClick={handlePrev}
            className="gallery-mob-logo__prev">
            <img src={prev} alt="prev" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="gallery-mob-logo__next">
            <img src={next} alt="next" />
          </button>
          <img
            src={collection[currentImage].src}
            alt="gallery_mob"
            className="gallery-mob-logo__image"
          />
        </div>
      </div>
      {innerWidth < 768 ? (
        <div className="gallery-view">
          <Link
            to="gallery"
            onClick={() => {
              ReactPixel.track("ClickButton", {
                buttonName: "Step to gallery",
              });
            }}
            className="aboutus-content-desc-more__btn">
            <span
              className="gallery-view-btn__txt"
              style={{
                color: "var(--scrollbar-reviews) !important",
              }}>
              View full gallery
            </span>
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default GallerySection;

import kitchen_first from "../../assets/images/gallery/kitchen.svg";
import kitchen_second from "../../assets/images/gallery/bg-kitchen.svg";
import repair from "../../assets/images/gallery/repair.svg";
import gallery_mob from "../../assets/images/gallery/gallery-mob.svg";

const GallerySection = () => {
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
            Bora Renovation uses only factory-grade products and specialized
            equipment which allows us to finish the project fast and
            effectively. You’ll be amazed at how simple it is to update your
            kitchen cabinets and give it that amazing luxurious feel without a
            complete remodeling.
            <br /> <br />
            Take a look at our gallery of pictures to get inspired for your
            future project.
          </p>
        </div>
        <div className="gallery-content-logos">
          <div className="gallery-content-logos-first">
            <img
              src={kitchen_first}
              alt="kitchen_first"
              className="gallery-content-logos-first__logo"
            />
            <img
              src={kitchen_second}
              alt="kitchen_second"
              className="gallery-content-logos-first__logo"
            />
          </div>
          <div className="gallery-content-logos-second">
            <img
              src={repair}
              alt="repair"
              className="gallery-content-logos-first__logo"
            />
          </div>
        </div>
      </div>
      <div className="gallery-mob">
        <div className="gallery-mob-desc">
          <p className="gallery-mob-desc__txt">
            Cabinet refinishing requires a higher level of skill than what most
            house painting companies have. It’s more than just applying paint
            with a brush or painting walls with a roller. Bora Renovation uses
            only factory-grade products and specialized equipment.
          </p>
        </div>
        <div className="gallery-mob-logo">
          <img
            src={gallery_mob}
            alt="gallery_mob"
            className="gallery-mob-logo__image"
          />
        </div>
      </div>
      <div className="gallery-view">
        <button className="gallery-view-btn">
          <span className="gallery-view-btn__txt">View full gallery</span>
        </button>
      </div>
    </section>
  );
};

export default GallerySection;

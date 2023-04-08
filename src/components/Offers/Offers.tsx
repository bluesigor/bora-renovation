import { useAppContext } from "../../context/AppContext";

const Offers = () => {
  const { setIsModalOpen, setModalType } = useAppContext();

  return (
    <section className="offers">
      <div className="offers-new">
        <div className="offers-new__logo" />
      </div>
      <div className="offers-title">
        <h6 className="offers-title__txt">Now offering</h6>
      </div>
      <div className="offers-main">
        <ul className="offers-main-list">
          <li className="offers-main-list__item">
            cabinet doors, drawer fronts, hardware replacement
          </li>
          <li className="offers-main-list__item">
            crown molding, accent pieces and trims installation
          </li>
          <li className="offers-main-list__item">cabinets intallation</li>
        </ul>
        <div className="offers-main-contact">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setModalType("quote");
            }}
            className="offers-main-contact-prime">
            <span className="offers-main-contact-prime__txt">
              Contact us today to get more information
            </span>
          </button>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setModalType("quote");
            }}
            className="offers-main-contact-quote">
            <span className="offers-main-contact-quote__txt">
              GET a FREE quote
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;

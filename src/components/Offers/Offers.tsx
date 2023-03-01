import { useAppContext } from "../../context/AppContext";

const Offers = () => {
  const { openModalQuote } = useAppContext();

  return (
    <section className="offers">
      <div className="offers-new">
        <div className="offers-new__logo" />
      </div>
      <div className="offers-title">
        <h5 className="offers-title__txt">Now offering</h5>
      </div>
      <div className="offers-main">
        <ul className="offers-main-list">
          <li className="offers-main-list__item">
            cabinet doors, drawer fronts, hardware <br /> replacement
          </li>
          <li className="offers-main-list__item">
            crown molding, accent pieces and trims <br /> installation
          </li>
        </ul>
        <div className="offers-main-contact">
          <button
            onClick={openModalQuote}
            className="offers-main-contact-prime">
            <span className="offers-main-contact-prime__txt">
              Contact us today to get more information
            </span>
          </button>
          <button
            onClick={openModalQuote}
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

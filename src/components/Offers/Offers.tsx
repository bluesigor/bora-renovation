const Offers = () => {
  return (
    <section className="offers">
      {/* {innerWidth > 768 && (
        <div className="offers-new">
          <div className="offers-new__logo" />
        </div>
      )} */}
      <div className="offers-title">
        <h6 className="offers-title__txt">What's right for my kitchen?</h6>
      </div>
      <div className="offers-main">
        {/* <ul className="offers-main-list"> 
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
        </div>*/}
        <div className="offers-main-block">
          <h6 className="offers-main-block__title">Refinishing</h6>
          <ul className="offers-main-block-list">
            <li>
              <span>
                I like the style of the existing doors and drawer fronts. I just
                want to change the color of my cabinets.
              </span>
            </li>
            <li>
              <span>My doors and drawer fronts are in good shape.</span>
            </li>
            <li>
              <span>
                I don’t mind seeing wood grains on my oak cabinets after
                refinishing.
              </span>
            </li>
          </ul>
          <p className="offers-main-block__sum">
            The cabinetry will be disassembled, cleaned, sanded, and then a new
            finish will be applied. The door style stays the same.
          </p>
        </div>
        <div className="offers-main-block">
          <h6 className="offers-main-block__title">Refacing</h6>
          <ul className="offers-main-block-list">
            <li>
              <span>
                I would like the doors, drawer fronts to be replaced with a new
                modern style (more than 50 different styles available).
              </span>
            </li>
            <li>
              <span>
                {" "}
                My doors and drawer fronts are falling apart, have damage.
              </span>
            </li>
            <li>
              <span>
                I don’t want to see wood grains on my oak cabinets after
                refinishing.
              </span>
            </li>
          </ul>
          <p className="offers-main-block__sum">
            All cabinet doors and drawer fronts replaced with new ones. The new
            doors and cabinet bases refinished in the same color.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offers;

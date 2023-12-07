import useMeasures from "../../core/hooks/useMeasures";

const Offers = () => {
  const { innerWidth } = useMeasures();

  return (
    <section className="offers">
      <div
        className="offers-title"
        style={{
          marginBottom: "-20px",
          marginTop: "10px",
        }}>
        <h6 className="offers-title__txt">
          What's right for my kitchen cabinet?
        </h6>
      </div>
      <div className="offers-inner">
        <div className="offers-wrapper">
          <div className="offers-main">
            <div className="offers-main-block">
              <h6 className="offers-main-block__title">Refinishing</h6>
              <ul className="offers-main-block-list">
                <li id="first-list">
                  <span>
                    I like the style of the existing doors and drawer fronts.{" "}
                    <br /> I just want to change the color of my cabinets.
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
                The cabinetry will be disassembled, cleaned, sanded, and then a
                new finish will be applied. The door style stays{" "}
                {innerWidth < 468 ? (
                  <>
                    <br /> the same.
                  </>
                ) : (
                  <>the same.</>
                )}
              </p>
            </div>
            {innerWidth < 768 && <h6 className="versus">VS</h6>}
            <div className="offers-main-block">
              <h6 className="offers-main-block__title">Refacing</h6>
              <ul className="offers-main-block-list">
                <li>
                  <span>
                    I would like the doors, drawer fronts to be replaced with a
                    new modern style (50 different styles available).
                  </span>
                </li>
                <li>
                  <span> My doors are falling apart, have damage.</span>
                </li>
                <li>
                  <span>
                    I don’t want to see wood grains on my oak cabinets after
                    refinishing.
                  </span>
                </li>
              </ul>
              <p className="offers-main-block__sum">
                All cabinet doors and drawer fronts replaced with new ones. The
                new doors and cabinet bases refinished in the same color.{" "}
              </p>
            </div>
          </div>
          <div className="offers-more">
            <div className="offers-more-block">
              <h6 className="offers-more-block__title">
                Available with refinishing and refacing
              </h6>
              <ul className="offers-more-block-list">
                <li>
                  <span>New hardware installation.</span>
                </li>
                <li>
                  <span>Accent pieces and crown molding installation.</span>
                </li>
                <li>
                  <span>New countertop and backsplash installation.</span>
                </li>
                <li>
                  <span>Choose any color you like.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;

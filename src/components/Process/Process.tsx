import { useState, memo } from "react";
import { ReactSVG } from "react-svg";

import taking from "../../assets/images/process/taking.svg";
import install from "../../assets/images/process/install.svg";
import protect from "../../assets/images/process/protect.svg";
import sand from "../../assets/images/process/sand.svg";
import materials_pro from "../../assets/images/process/materials.svg";
import cleaning from "../../assets/images/process/cleaning.svg";
import useMeasures from "../../core/hooks/useMeasures";
import ProcessList from "./ProcessList";

function Process() {
  const [isHovered, setIsHovered] = useState(false);
  const { innerWidth } = useMeasures();
  const onHover = () => {
    setIsHovered(true);
  };

  const offHover = () => {
    setIsHovered(false);
  };

  return (
    <section className="process">
      <div className="process-header">
        <h1 className="process-header__title">
          Swipe right to learn about our process
        </h1>
      </div>
      {innerWidth > 768 ? (
        <div className="process-wrapper">
          <ul className="process-list">
            <div
              onMouseEnter={onHover}
              onMouseLeave={offHover}
              className="process-list-wrapper">
              <div className="process-list-logo">
                <ReactSVG src={taking} />
              </div>
              <div className="process-list__outer">
                <p className="process-list__title">
                  Taking off doors and <br /> drawer fronts
                </p>
                {isHovered && (
                  <span className="process-list__outer-desc1">
                    We will take off all hardware and hinges, and take off all
                    doors and drawer fronts from the frame.
                  </span>
                )}
              </div>
            </div>
            <div
              onMouseEnter={onHover}
              onMouseLeave={offHover}
              className="process-list-wrapper">
              <div className="process-list-logo">
                <ReactSVG src={cleaning} />
              </div>
              <div className="process-list__outer">
                <p className="process-list__title">
                  doors, drawer fronts and cabinet frame cleaning
                </p>

                {isHovered && (
                  <span className="process-list__outer-desc2">
                    We will properly clean the cabinets with a professional
                    cleaning solution to remove all grease and grime.
                  </span>
                )}
              </div>
            </div>
            <div
              onMouseEnter={onHover}
              onMouseLeave={offHover}
              className="process-list-wrapper">
              <div className="process-list-logo">
                <img src={sand} alt={sand} />
              </div>
              <div className="process-list__outer">
                <p className="process-list__title">
                  Scuff sanding down the existing finish
                </p>
                {isHovered && (
                  <span className="process-list__outer-desc3">
                    We will sand down the existing finish before refinishing to
                    give the new finish a good surface to grip.
                  </span>
                )}
              </div>
            </div>
            <div
              onMouseEnter={onHover}
              onMouseLeave={offHover}
              className="process-list-wrapper">
              <div className="process-list-logo">
                <ReactSVG src={protect} />
              </div>
              <div className="process-list__outer">
                <p className="process-list__title">Protecting and covering</p>
                {isHovered && (
                  <span className="process-list__outer-desc4">
                    We will protect and cover the insides of your cabinets,
                    walls, floors, ceiling, backsplash, countertop, and any
                    other surfaces not to be painted.
                  </span>
                )}
              </div>
            </div>
            <div
              onMouseEnter={onHover}
              onMouseLeave={offHover}
              className="process-list-wrapper">
              <div className="process-list-logo">
                <ReactSVG src={materials_pro} />
              </div>
              <div className="process-list__outer">
                <p className="process-list__title">
                  Applying high-quality materials
                </p>
                {isHovered && (
                  <span className="process-list__outer-desc5">
                    We will apply high-quality primer, lightly sand to make sure
                    primer is stuck perfectly to the surface, and apply top coat
                    with a professional HVLP sprayer.
                  </span>
                )}
              </div>
            </div>
            <div
              onMouseEnter={onHover}
              onMouseLeave={offHover}
              className="process-list-wrapper">
              <div className="process-list-logo">
                <img src={install} alt={install} />
              </div>
              <div className="process-list__outer">
                <p className="process-list__title">
                  Doors and drawer fronts installation
                </p>
                {isHovered && (
                  <span className="process-list__outer-desc6">
                    We will install doors, drawer fronts, make new holes for the
                    new hardware if requested, and take care of the cleanup once
                    we’ve brought your project to completion.
                  </span>
                )}
              </div>
            </div>
          </ul>
        </div>
      ) : (
        <ProcessList />
      )}
    </section>
  );
}

export default memo(Process);

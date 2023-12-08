import BenefitItem from "./BenefitItem";

import { General } from "../../models";

import { benefits } from "../../core/constants/constants";
import useMeasures from "../../core/hooks/useMeasures";

const Benefits = () => {
  const { innerWidth } = useMeasures();

  return (
    <section className="benefits">
      <div className="benefits-header">
        <h3 className="benefits-header__title">
          {innerWidth > 768 && <>why choose us?</>}
        </h3>
      </div>
      <div className="benefits-list">
        {benefits.map((benefit: General.Benefits) => {
          const { id, title, desc, icon } = benefit;
          return (
            <BenefitItem
              key={id}
              id={id}
              title={title}
              desc={desc}
              icon={icon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;

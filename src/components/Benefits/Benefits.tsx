import { benefits } from "../../core/constants/constants";
import { General } from "../../models";

import BenefitItem from "./BenefitItem";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-header">
        <h3 className="benefits-header__title">why choose us?</h3>
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

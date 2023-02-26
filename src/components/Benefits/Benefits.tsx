import { benefits } from "../../core/constants/constants";
import { General } from "../../models";

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
            <div className="benefits-list__item" key={id}>
              <img
                src={icon}
                alt={title}
                className="benefits-list__item-icon"
              />
              <p className="benefits-list__item-title">{title}</p>
              <p className="benefits-list__item-desc">{desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;

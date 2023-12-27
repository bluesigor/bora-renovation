type BenefitItemProps = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};

const BenefitItem = ({ desc, icon, id, title }: BenefitItemProps) => {
  return (
    <div className="benefits-list__item" key={id}>
      <img
        src={icon}
        alt={title}
        className="benefits-list__item-icon"
        loading="lazy"
      />
      <p className="benefits-list__item-title">{title}</p>
      <p className="benefits-list__item-desc">{desc}</p>
    </div>
  );
};

export default BenefitItem;

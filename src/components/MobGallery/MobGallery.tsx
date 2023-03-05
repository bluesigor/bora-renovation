import { General } from "../../models";
import { collection } from "../../core/constants/collection";

const MobGallery = () => {
  return (
    <div className="mob-gallery">
      {collection.map((image: General.Image) => {
        const { id, src } = image;
        return <img key={id} src={src} alt={src} />;
      })}
    </div>
  );
};

export default MobGallery;

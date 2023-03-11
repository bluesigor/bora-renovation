import { LazyLoadImage } from "react-lazy-load-image-component";

import { General } from "../../models";

import { collection } from "../../core/constants/collection";

const MobGallery = () => {
  return (
    <div className="mob-gallery">
      {collection.map((image: General.Image) => {
        const { id, src } = image;
        return (
          <LazyLoadImage
            delayTime={100}
            width={158}
            height={157}
            key={id}
            src={src}
            alt={src}
          />
        );
      })}
    </div>
  );
};

export default MobGallery;

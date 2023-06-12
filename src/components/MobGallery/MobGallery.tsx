import { LazyLoadImage } from "react-lazy-load-image-component";

import { General } from "../../models";

import { collection } from "../../core/constants/collection";
import { useAppContext } from "../../context/AppContext";

const MobGallery = () => {
  const { setIsModalOpen, setModalType, setImageData } = useAppContext();

  return (
    <div className="mob-gallery">
      {collection.map((image: General.Image, indexNum: number) => {
        const { id, src, index } = image;
        return (
          <LazyLoadImage
            delayTime={100}
            width={158}
            height={157}
            key={id}
            src={src}
            alt={src}
            onClick={() => {
              setImageData(() => {
                return {
                  ...image,
                  index: indexNum,
                };
              });
              setIsModalOpen(true);
              setModalType("image");
            }}
          />
        );
      })}
    </div>
  );
};

export default MobGallery;

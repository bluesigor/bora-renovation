import { useAppContext } from "../../context/AppContext";
import { collection } from "../constants/collection";

const useImageNavigation = () => {
  const { imageData, setImageData } = useAppContext();

  const handleNext = (e: any) => {
    e.stopPropagation();

    if (imageData.src) {
      if (imageData.index === 107) {
        setImageData({
          ...collection[0],
          index: 0,
        });
      } else {
        setImageData({
          ...collection[imageData?.index + 1],
          index: imageData?.index + 1,
        });
      }
    }
  };

  const handlePrev = (e: any) => {
    e.stopPropagation();

    if (imageData.src) {
      if (imageData.index === 0) {
        setImageData({
          ...collection[collection.length - 1],
          index: collection.length - 1,
        });
      } else {
        setImageData({
          ...collection[imageData?.index - 1],
          index: imageData?.index - 1,
        });
      }
    }
  };

  return { handleNext, handlePrev };
};

export default useImageNavigation;

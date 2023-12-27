import { useAppContext } from "../../context/AppContext";
import { collection } from "../constants/collection";

const useImageNavigation = () => {
  const { imageData, setImageData } = useAppContext();

  const handleNavigation = (direction: number) => (e: React.MouseEvent) => {
    e.stopPropagation();

    if (imageData.src) {
      const newIndex =
        (imageData.index + direction + collection.length) % collection.length;

      setImageData({
        ...collection[newIndex],
        index: newIndex,
      });
    }
  };

  const handleNext = handleNavigation(1);
  const handlePrev = handleNavigation(-1);

  return { handleNext, handlePrev };
};

export default useImageNavigation;

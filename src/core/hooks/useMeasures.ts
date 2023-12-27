import { useEffect, useState } from "react";
import { getWindowSize } from "../constants/constants";

const useMeasures = () => {
  const [{ innerWidth, innerHeight }, setWindowSize] = useState(
    getWindowSize()
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    function handleWindowResize() {
      // Clear the previous timeout
      clearTimeout(timeoutId);

      // Set a new timeout
      timeoutId = setTimeout(() => {
        setWindowSize(getWindowSize());
      }, 200); // Adjust the debounce time as needed
    }

    window.addEventListener("resize", handleWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(timeoutId); // Clear the timeout on unmount
    };
  }, []);

  return { innerWidth, innerHeight };
};

export default useMeasures;

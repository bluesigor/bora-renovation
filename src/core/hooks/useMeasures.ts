import { useEffect, useState } from "react";

import { getWindowSize } from "../constants/constants";

const useMeasures = () => {
  const [{ innerWidth, innerHeight }, setWindowSize] = useState(
    getWindowSize()
  );

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { innerWidth, innerHeight };
};

export default useMeasures;

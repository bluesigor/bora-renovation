import { useEffect, useState } from "react";

import { getWindowSize } from "../constants/constants";

const useMeasures = () => {
  const [{ innerWidth }, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { innerWidth };
};

export default useMeasures;

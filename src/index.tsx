import React from "react";
import ReactDOM from "react-dom/client";
import ReactPixel from "react-facebook-pixel";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
ReactPixel.init("2747837035353056");

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

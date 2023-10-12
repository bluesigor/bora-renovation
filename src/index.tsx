import React from "react";
import ReactDOM from "react-dom/client";
import ReactPixel from "react-facebook-pixel";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
ReactPixel.init("670801068358130");

export const metadata = {
  other: {
    name: "google-site-verification",
    content: "nZ5Dv5b4LIGkfMBuGJeMdOVNTTlBFJNIx2hLvXay12Y",
  },
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

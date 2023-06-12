import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPixel from "react-facebook-pixel";

import Fallback from "./components/Fallback";
import Layout from "./components/Layout/Layout";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";

import { AppContextProvider } from "./context/AppContext";
import "./styles/globals.scss";

function App() {
  ReactPixel.track("PageView");

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Fallback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

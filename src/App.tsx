import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import "./styles/globals.scss";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import Fallback from "./components/Fallback";
import Layout from "./components/Outlet/Layout";
import ReactPixel from "react-facebook-pixel";

function App() {
  ReactPixel.track("PageView");

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="*" element={<Fallback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

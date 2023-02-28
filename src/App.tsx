import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

import "./styles/globals.scss";

import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import Fallback from "./components/Fallback";
import Layout from "./components/Outlet/Layout";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
          </Route>
          <Route path="*" element={<Fallback />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;

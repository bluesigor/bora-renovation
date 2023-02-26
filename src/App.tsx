import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import Offers from "./components/Offers";
import Process from "./components/Process";
import QuotePopup from "./components/QuotePopup";
import WelcomeBanner from "./components/WelcomeBanner";

import { AppContextProvider } from "./context/AppContext";

import "./styles/globals.scss";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <WelcomeBanner />
      <QuotePopup />
      <Benefits />
      <AboutUs />
      <Process />
      <Offers />
      <GallerySection />
      <FAQ />
    </AppContextProvider>
  );
}

export default App;

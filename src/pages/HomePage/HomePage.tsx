import { useEffect } from "react";

import AboutUs from "../../components/AboutUs";
import Benefits from "../../components/Benefits";
import FAQ from "../../components/FAQ";
import GallerySection from "../../components/GallerySection";
import LeaveReview from "../../components/LeaveReview";
import Offers from "../../components/Offers";
import Process from "../../components/Process";
import QuestionsBanner from "../../components/QuestionsBanner";
import QuotePopup from "../../components/QuotePopup";
import Reviews from "../../components/Reviews";
import WelcomeBanner from "../../components/WelcomeBanner";
import ContactUs from "../../components/ContactUs/ContactUs";
import GetQuote from "../../components/GetQuote";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      return window.scrollTo(0, 0);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WelcomeBanner />
      <QuotePopup />
      <Benefits />
      <AboutUs />
      <Process />
      <Offers />
      <GallerySection />
      <FAQ />
      <LeaveReview />
      <Reviews />
      <QuestionsBanner />
      <ContactUs />
      <GetQuote />
    </>
  );
};

export default HomePage;

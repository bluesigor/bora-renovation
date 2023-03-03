import { createContext, useContext, useEffect, useState } from "react";

const defaultState = {
  isModalOpen: false,
  isReviewModalOpen: false,
  isVisisble: false,
  openModalQuote: () => {},
  closeModalQuote: () => {},
  openReviewModal: () => {},
  closeReviewModal: () => {},
};

const AppContext = createContext(defaultState);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isVisisble, setIsVisisble] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const footer = document.querySelector("footer");
      const header = document.querySelector("header");

      if (footer && header) {
        const footerTop = footer.getBoundingClientRect().top;
        const headerBottom = header.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;
        const isScrolledToFooter =
          footerTop <= windowHeight || headerBottom === 0;

        setIsVisisble(!isScrolledToFooter);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }

  const contextValue = {
    isModalOpen,
    openModalQuote: () => {
      setIsModalOpen(true);
    },

    closeModalQuote: () => {
      setIsModalOpen(false);
    },

    isReviewModalOpen,
    openReviewModal: () => {
      setReviewModalOpen(true);
    },

    closeReviewModal: () => {
      setReviewModalOpen(false);
    },

    isVisisble,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

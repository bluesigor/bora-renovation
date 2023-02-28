import { createContext, useContext, useState } from "react";

const defaultState = {
  isModalOpen: false,
  isReviewModalOpen: false,
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
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

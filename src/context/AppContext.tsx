import { createContext, useContext, useEffect, useState } from "react";
import { General } from "../models";

const defaultState = {
  isModalOpen: false,

  isVisisble: false,
  isOpen: false,
  imageData: {
    id: 1,
    src: "",
    index: 0,
  },
  modalType: "",
  closeModal: () => {},
  setIsModalOpen: (state: boolean) => {},
  setIsVisisble: (state: boolean) => {},
  closeHamb: () => {},
  openHamb: () => {},
  setImageData: (state: any) => {},
  setModalType: (state: string) => {},
};

const AppContext = createContext(defaultState);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [isVisisble, setIsVisisble] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState<any>();

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
    setIsModalOpen,
    closeModal: () => {
      setIsModalOpen(false);
      setModalType("");
    },

    isVisisble,
    setIsVisisble,
    isOpen,

    closeHamb: () => {
      setIsOpen(false);
    },
    openHamb: () => {
      setIsOpen(true);
    },

    imageData,
    setImageData,

    modalType,
    setModalType,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

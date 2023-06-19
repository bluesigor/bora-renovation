import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Toaster position="top-right" containerClassName="toaster" />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;

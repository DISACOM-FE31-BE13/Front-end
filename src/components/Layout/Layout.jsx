import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Header2 from "../Header/Header2.jsx";
import Routers from "../../router/Routers.js";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname.includes("/dashboard") || location.pathname.includes("/event") || location.pathname.includes("/infologin") || location.pathname.includes("/motivasi") || location.pathname.includes("/infodetail")) {
      return <Header2 />;
    } else {
      return <Header />;
    }
  };

  return (
    <>
      {renderHeader()}
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;

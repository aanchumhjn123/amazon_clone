import React from "react";
import Header from "../Header/Header";
import HeaderSec from "../Header-sec/Header-sec";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Router";
const Layout = () => {
  return (
    <>
      <Header />
      <HeaderSec />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

import React, { ReactChild } from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Container.scss";

function Container({ children }) {
  return (
    <div className="Container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Container;

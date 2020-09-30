import React from "react";
import { Box } from "@material-ui/core";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Container({ children }) {
  return (
    <Box
      width="100vw"
      style={{ maxWidth: "1100px" }}
      boxShadow={3}
      marginY={3}
      padding={2}
      bgcolor="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default Container;

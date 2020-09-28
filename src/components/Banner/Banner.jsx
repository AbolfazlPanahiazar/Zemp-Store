import React from "react";
import { Grid, Box } from "@material-ui/core";

import banner1 from "../../assets/images/banner1.gif";
import banner2 from "../../assets/images/banner2.jpg";
import "./Banner.scss";

function Banner() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box className="margin1" mt={3}>
          <img className="banner-image" src={banner2} alt="banner" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className="margin2" my={3}>
          <img className="banner-image" src={banner1} alt="banner" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;

import React from "react";
import { Grid, Box } from "@material-ui/core";

import banner1 from "../../assets/images/banner1.gif";
import banner2 from "../../assets/images/banner2.jpg";
import "./Banner.scss";

function Banner() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Box mt={3} pl={2}>
          <img className="banner-image" src={banner2} alt="banner" />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box my={3} pr={1}>
          <img className="banner-image" src={banner1} alt="banner" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;

import React from "react";
import { Grid, Box } from "@material-ui/core";

import banner1 from "../../assets/images/banner21.jpg";
import banner2 from "../../assets/images/banner22.jpg";
import banner3 from "../../assets/images/banner23.jpg";
import banner4 from "../../assets/images/banner24.jpg";
import "./Banner.scss";

function Banner() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} lg={3}>
        <Box className="margin1">
          <img className="banner-image" src={banner1} alt="banner" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Box className="margin2">
          <img className="banner-image" src={banner2} alt="banner" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Box className="margin3">
          <img className="banner-image" src={banner3} alt="banner" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <Box className="margin4">
          <img className="banner-image" src={banner4} alt="banner" />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Banner;

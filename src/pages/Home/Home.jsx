import React, { useEffect } from "react";
import api from "../../gate/api";
import { Grid, Box } from "@material-ui/core";

import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";

import { getProducts } from "../../gate/home";

function Home() {
  useEffect(() => {
    api
      .get("products/", { per_page: 100 })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box my={6} width="100">
      <Grid container>
        <Grid item>
          <Carousel />
        </Grid>
        <Grid item>
          <Banner />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

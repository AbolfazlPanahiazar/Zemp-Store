import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Loading from "../Loading/Loading";
import OffSale from "../../components/OffSale/OffSale";
import BestSellers from "../../components/‌BestSellers/BestSellers";
import Carousel2 from "../../components/Carousel2/Carousel2";

function Home() {
  const pending1 = useSelector((state) => state.categories.pending);
  const pending2 = useSelector((state) => state.products.pending);

  return pending1 || pending2 ? (
    <Loading />
  ) : (
    <Box my={6} display="flex" flexDirection="column" justifyContent="center">
      <Grid container>
        <Grid item>
          <Carousel />
        </Grid>
        <Grid item>
          <Banner />
        </Grid>
      </Grid>
      <Categories />
      <OffSale />
      <Carousel2 />
      <BestSellers />
    </Box>
  );
}

export default Home;

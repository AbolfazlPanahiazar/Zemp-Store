import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import { connect, useSelector } from "react-redux";

import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Loading from "../Loading/Loading";
import OffSale from "../../components/OffSale/OffSale";
import BestSellers from "../../components/‌BestSellers/BestSellers";
import Carousel2 from "../../components/Carousel2/Carousel2";

import { getProducts } from "../../store/products/productsThunk";
import { getCategories } from "../../store/categories/categoriesThunk";

function Home({ getProducts, getCategories }) {
  const pending1 = useSelector((state) => state.categories.pending);
  const pending2 = useSelector((state) => state.products.pending);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

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

export default connect(null, { getProducts, getCategories })(Home);

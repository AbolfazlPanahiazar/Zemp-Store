import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";

import Carousel from "../../components/Carousel/Carousel";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";

function Home() {
  useEffect(() => {}, []);

  return (
    <Box my={6} width="100" display="flex" flexDirection="column" justifyContent="center">
      <Grid container>
        <Grid item>
          <Carousel />
        </Grid>
        <Grid item>
          <Banner />
        </Grid>
      </Grid>
      <Categories />
    </Box>
  );
}

export default Home;

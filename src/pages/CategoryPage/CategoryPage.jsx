import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import api from "../../gate/api";

import ProuctView from "../../components/ProductView/ProductView";
import Loading from "../Loading/Loading";
import Banner2 from "../../components/Banner2/Banner2";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: "2.4rem",
    fontWeight: "bold",
  },
}));

function CategoryPage() {
  const categories = useSelector((state) => state.categories.categories);
  const { categoryId } = useParams();
  const [pending, setPending] = useState(true);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({ name: "" });
  const classes = useStyles();

  useEffect(() => {
    api
      .get(`products`, { per_page: 100, category: categoryId })
      .then((response) => {
        console.log(response);
        setProducts(response.data);
        setPending(false);
      })
      .catch((error) => {
        console.log(error.reponse);
        setPending(false);
      });
  }, []);

  return pending ? (
    <Loading />
  ) : (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box padding="5px">
        <Banner2 />
      </Box>
      <Box display="flex" justifyContent="center" paddingBottom="10px">
        <Typography className={classes.title}>
          {categories.find((item) => item.id === categoryId) ? categories.find((item) => item.id === categoryId).name : ""}
        </Typography>
      </Box>
      {products.length === 0 ? (
        <span>این دسته بندی شامل محصولی نمیشد</span>
      ) : (
        <Box width="100%" display="flex" flexWrap="wrap" justifyContent="center">
          <Grid container>
            {products.map((item) => (
              <Grid item key={item.id} xs={6} sm={4} md={3} lg={2}>
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                  <ProuctView product={item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default CategoryPage;

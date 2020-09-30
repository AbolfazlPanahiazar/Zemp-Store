import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ProductView from "../../components/ProductView/ProductView";

const useStyles = makeStyles(() => ({
  products: {
    width: "100%",
    boxSizing: "border-box",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  label: {
    fontWeight: "bold",
  },
}));

function OnSale() {
  const classes = useStyles();
  const products = useSelector((state) => state.products.products.filter((item) => item.on_sale));

  return (
    <Box>
      <Box paddingX="8px">
        <Typography className={classes.label}>پر فروش ها</Typography>
      </Box>
      <Box className={classes.products}>
        {products.map((item) => (
          <ProductView key={item.id} name={item.name} image={item.images[0]} regularPrice={item.regular_price} salePrice={item.sale_price} />
        ))}
      </Box>
    </Box>
  );
}

export default OnSale;

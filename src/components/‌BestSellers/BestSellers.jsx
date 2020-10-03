import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ProductView from "../ProductView/ProductView";

const useStyles = makeStyles(() => ({
  products: {
    width: "100%",
    boxSizing: "border-box",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  label: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
}));

function OffSale() {
  const classes = useStyles();
  const products = useSelector((state) => state.products.products.filter((item) => item.regular_price > 300000));

  return (
    <Box bgcolor="#6BB927" paddingY="10px" borderRadius="5px">
      <Box paddingX="8px">
        <Typography className={classes.label}>پر فروش ها</Typography>
      </Box>
      <Box className={classes.products}>
        {products.map((item) => (
          <ProductView key={item.id} product={item} />
        ))}
      </Box>
    </Box>
  );
}

export default OffSale;

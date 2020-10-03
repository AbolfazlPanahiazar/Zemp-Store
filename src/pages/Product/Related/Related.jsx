import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ProductView from "../../../components/ProductView/ProductView";

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

function Related({ products }) {
  const classes = useStyles();

  console.log("products", products);

  return (
    <Box paddingY="10px" marginY="10px" borderRadius="5px">
      <Box paddingX="8px">
        <Typography className={classes.label}>محصولات مشابه</Typography>
      </Box>
      <Box className={classes.products}>
        {products.map((item) => (
          <ProductView key={item.id} product={item} />
        ))}
      </Box>
    </Box>
  );
}

export default Related;

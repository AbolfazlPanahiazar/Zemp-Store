import React from "react";
import { Card, CardActionArea, CardContent, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    width: "180px",
    height: "250px",
    margin: "8px",
    padding: "3px",
    boxShadow: "3px 3px 3px #bbb",
    display: "inline-block",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
    border: "1px solid #ccc",
    a: {
      textDecoration: "none",
    },
  },
  wrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  action: {
    height: "60%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
  name: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  regPrice: {
    fontSize: "13px",
    textDecoration: "line-through",
    color: "#D80D0D",
    fontWeight: "bold",
    textAlign: "center",
  },
  salePrice: {
    fontSize: "13px",
    color: "#0DA869",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

function ProductView({ product, className }) {
  const classes = useStyles();

  return (
    <Card className={classes.root + " " + className}>
      <Link style={{ width: "100%", height: "100%" }} to={`/product/${product.id}`}>
        <Box className={classes.wrapper}>
          <CardActionArea className={classes.action}>
            <img className={classes.image} src={product.images[0].src} title={product.name} alt={product.images[0].alt} />
          </CardActionArea>
          <CardContent>
            <Typography className={classes.name}>{product.name.substring(0, 15)}</Typography>
            <Box height="40%" width="100%" marginTop="10px" display="flex" justifyContent="space-between" alignItems="flex-end">
              {product.on_sale ? (
                <>
                  <Typography className={classes.salePrice}>{product.sale_price.toPersianDigits()}</Typography>
                  <Typography className={classes.regPrice}>{product.regular_price.toPersianDigits()}</Typography>
                </>
              ) : (
                <Typography className={classes.salePrice}>{product.regular_price.toPersianDigits()}</Typography>
              )}
            </Box>
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
}

export default ProductView;

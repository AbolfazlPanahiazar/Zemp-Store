import React from "react";
import { Card, CardActionArea, CardContent, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "150px",
    height: "220px",
    margin: "8px",
    padding: "3px",
    boxShadow: "3px 3px 3px #bbb",
    display: "inline-block",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fefefe",
    border: "1px solid #ccc",
  },
  wrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  action: {
    height: "50%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "90%",
  },
  name: {
    fontSize: "14px",
  },
  price: {
    fontSize: "12px",
  },
}));

function ProductView({ name, image, regularPrice, salePrice }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box className={classes.wrapper}>
        <CardActionArea className={classes.action}>
          <img className={classes.image} src={image.src} title={name} alt={image.alt} />
        </CardActionArea>
        <CardContent>
          <Typography className={classes.name}>{name.substring(0, 20)}</Typography>
          <Box display="flex">
            <Typography className={classes.price}>{salePrice}</Typography>
            <Typography className={classes.price}>{regularPrice}</Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

export default ProductView;

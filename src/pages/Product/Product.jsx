import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Button, IconButton } from "@material-ui/core";
import { ShoppingCart, Add, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { useParams, Link } from "react-router-dom";
import api from "../../gate/api";
import MUICarousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";

import Loading from "../Loading/Loading";
import Related from "./Related/Related";

const useStyles = makeStyles(() => ({
  name: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    boxShadow: "3px 3px 3px #bbb",
  },
  price: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#0DA869",
    marginLeft: "10px",
  },
  offprice: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#D80D0D",
    textDecoration: "line-through",
  },
  addButton: {
    backgroundColor: "#6E70FF",
    color: "#FFFFFF",
    width: "200px",
    marginLeft: "10px",
    height: "50px",
    "&:hover": {
      color: "#000000",
    },
  },
  cartButton: {
    border: "1px solid #ccc",
    color: "#888",
    width: "50px",
    height: "50px",
  },
  plus: {
    backgroundColor: "#F0F0F5",
    color: "#6E70FF",
  },
}));

function Product() {
  const { productId } = useParams();
  const classes = useStyles();
  const [pending, setPending] = useState(true);
  const all = useSelector((state) => state.products.products);
  const [count, setCount] = useState(1);
  // const [similar, setSimilar] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    on_sale: "",
    regular_price: "",
    images: ["", "", ""],
  });

  useEffect(() => {
    api
      .get(`products/${productId}`)
      .then((response) => {
        console.log(response);
        setProduct(response.data);
        // const temp = all.filter((item) => response.data.related_ids.inclues(item.id));
        // setSimilar(temp);
        setPending(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return pending ? (
    <Loading />
  ) : (
    <Box marginY="20px">
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
          <Box display="flex" justifyContent="cetner" width="100%" height="100%">
            <MUICarousel className="Carousel" indicators={false}>
              {product.images.map((item) => (
                <Box width="100%" height="100%" display="flex" justifyContent="center" key={item}>
                  <img className={classes.image} src={item.src} alt={product.name} />
                </Box>
              ))}
            </MUICarousel>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Box width="100%" height="100%" padding="15px">
            <Typography className={classes.name}>{product.name}</Typography>
            <Box display="flex" alignItems="center" marginBottom="5px" marginTop="15px">
              <Typography className={classes.price}>{String(product.price).toPersianDigits()} تومان</Typography>
              {product.on_sale && <Typography className={classes.offprice}>{String(product.regular_price).toPersianDigits()} تومان</Typography>}
            </Box>
            <hr />
            <Box display="flex" alignItems="center" marginY="10px">
              <IconButton className={classes.plus} onClick={() => setCount(count + 1)}>
                <Add />
              </IconButton>
              <Box width="50px" height="50px" display="flex" justifyContent="center" alignItems="center">
                {String(count).toPersianDigits()}
              </Box>
              {count > 1 && (
                <IconButton className={classes.plus} onClick={() => setCount(count - 1)}>
                  <Remove />
                </IconButton>
              )}
            </Box>
            <Box dispaly="flex">
              <Button className={classes.addButton}>افزودن به سبد خرید</Button>
              <Link to="/cart">
                <Button className={classes.cartButton}>
                  <ShoppingCart />
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Related products={similar} /> */}
    </Box>
  );
}

export default Product;

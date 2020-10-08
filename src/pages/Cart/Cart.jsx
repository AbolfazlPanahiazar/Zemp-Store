import React from "react";
import { connect, useSelector } from "react-redux";
import { Box, Typography, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart, Add, Remove } from "@material-ui/icons";

import { increaseNumbers, decreaseNumbers, removeFromCart, clearCart } from "../../store/cart/cartActions";

const useStyles = makeStyles(() => ({
  root: {},
  gridItem: {},
  image: {
    maxWidth: "100%",
  },
}));

function Cart({ increaseNumbers, decreaseNumbers, removeFromCart, clearCart }) {
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();

  return (
    <Box width="100%" bgcolor="red">
      <Box>
        <Typography>سبد خرید</Typography>
      </Box>
      <Box>
        <Grid xs={1} sm={2} container>
          {cart.products.map((item) => (
            <Grid key={item.id} item>
              <Box width="100%" display="flex">
                <Box maxWidth="150px">
                  <img className={classes.image} src={item.images[0].src} title={item.name} />
                </Box>
                <Box>
                  <Typography>{item.name}</Typography>
                  <Typography>{item.price}</Typography>
                  <Typography>{item.count}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default connect(null, { increaseNumbers, decreaseNumbers, removeFromCart, clearCart })(Cart);

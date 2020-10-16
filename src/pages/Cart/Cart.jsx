import React from "react";
import { connect, useSelector } from "react-redux";
import { Box, Typography, Grid, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Add, Remove, Delete, ClearAll } from "@material-ui/icons";
import { toast } from "react-toastify";

import { increaseNumbers, decreaseNumbers, removeFromCart, clearCart } from "../../store/cart/cartActions";

const useStyles = makeStyles(() => ({
  root: {},
  gridItem: {
    borderTop: "1px solid #ccc",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  image: {
    maxWidth: "90%",
  },
  countButtons: {
    width: "40px",
    height: "40px",
    backgroundColor: "#F0F0F5",
    color: "#6E70FF",
  },
  trashButton: {
    width: "40px",
    height: "40px",
    backgroundColor: "#F0F0F5",
    color: "#DD0000",
  },
  clearButton: {
    border: "1px solid #ccc",
    color: "#888",
    width: "50px",
    height: "50px",
  },
  submitButton: {
    backgroundColor: "#6E70FF",
    color: "#FFFFFF",
    width: "200px",
    marginLeft: "10px",
    height: "50px",
    "&:hover": {
      color: "#000000",
    },
  },
}));

function Cart({ increaseNumbers, decreaseNumbers, removeFromCart, clearCart }) {
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
      <Box padding="10px">
        <Typography className={classes.heading}>سبد خرید</Typography>
      </Box>
      <Box width="97%" display="flex" justifyContent="center">
        <Grid container>
          {cart.products.length === 0 ? (
            <Typography className={classes.heading}>هیچ محصولی در سبد خرید موجود نیست</Typography>
          ) : (
            cart.products.map((item) => (
              <Grid className={classes.gridItem} key={item.id} item xs={12} sm={6}>
                <Box width="100%" minHeight="100px" display="flex" alignItems="center" justifyContent="space-between" paddingX="5px">
                  <Box maxWidth="150px">
                    <img className={classes.image} src={item.images[0].src} title={item.name} />
                  </Box>
                  <Box padding="5px">
                    <Typography>{item.name}</Typography>
                    <Typography>{item.price}</Typography>
                  </Box>
                  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <IconButton onClick={() => increaseNumbers(item.id)} className={classes.countButtons}>
                      <Add />
                    </IconButton>
                    <Typography>{item.count}</Typography>
                    {item.count > 1 && (
                      <IconButton onClick={() => decreaseNumbers(item.id)} className={classes.countButtons}>
                        <Remove />
                      </IconButton>
                    )}
                  </Box>
                  <Box>
                    <IconButton onClick={() => removeFromCart(item.id)} className={classes.trashButton}>
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
      <Box dispaly="flex" marginY="10px">
        <Button onClick={() => toast.success("از اعتماد شما متشکریم")} className={classes.submitButton}>
          تکمیل خرید
        </Button>
        <Button onClick={() => clearCart()} className={classes.clearButton}>
          <ClearAll />
        </Button>
      </Box>
    </Box>
  );
}

export default connect(null, { increaseNumbers, decreaseNumbers, removeFromCart, clearCart })(Cart);

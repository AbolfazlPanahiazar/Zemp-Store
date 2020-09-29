import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { Box } from "@material-ui/core";

function CartIcon() {
  return (
    <Link to="/cart">
      <Box>
        <ShoppingCart />
      </Box>
    </Link>
  );
}

export default CartIcon;

import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import TeaLoading from "./TeaLoading/TeaLoading";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Vazir",
    fontSize: "20px",
  },
}));

function Loading() {
  const classes = useStyles();

  return (
    <Box className={classes.root} display="flex" justifyContent="center" alignItems="center">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TeaLoading width="90" height="120" color="#000000" />
        <Typography className={classes.text}>در حال دریافت اطلاعات...</Typography>
      </Box>
    </Box>
  );
}

export default Loading;

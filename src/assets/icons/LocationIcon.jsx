import React from "react";
import { Box } from "@material-ui/core";
import { PinDrop } from "@material-ui/icons";

function LocationIcon() {
  return (
    <Box display="flex" alignItems="center">
      <PinDrop />
    </Box>
  );
}

export default LocationIcon;

import React from "react";
import { Typography } from "@mui/material";

function Header() {
  return (
    <div className={"header"}>
      <Typography variant="h3" gutterBottom component="div">
        MemeGenerator
      </Typography>
      <Typography variant="body1" gutterBottom component="div">
        How to use :
      </Typography>
      <Typography variant="body1" gutterBottom component="div">
        1.Find image that you like.
      </Typography>
      <Typography variant="body1" gutterBottom component="div">
        2.Enter top text and bottom text.
      </Typography>
      <Typography variant="body1" gutterBottom component="div">
        3.Make a screenshot.
      </Typography>
    </div>
  );
}

export default Header;

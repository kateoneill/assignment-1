import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";


const CastDetails= ({ cast }) => {

  return (
    <>

    <Typography variant="h2" component="p">
            {cast.name}
          </Typography>

          <Typography variant="h5" component="h3">
            Biography
          </Typography>

          <Typography variant="h6" component="p">
            {cast.biography}
          </Typography>

          
          </>
  );
};

export default CastDetails ;
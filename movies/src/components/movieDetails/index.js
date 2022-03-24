import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';


const root = {
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Paper 
        component="ul" 
        sx={{...root, backgroundColor:'#676e78'}}
      >
        <li>
          <Chip label="Genres" sx={{...chip, backgroundColor:'#9197a1'}} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip, backgroundColor:'#9197a1'}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root, backgroundColor:'#676e78'}}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{backgroundColor:'#9197a1', color: 'white'}} />
        <Chip
          sx={{backgroundColor:'#9197a1'}}
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          sx={{backgroundColor:'#9197a1'}}
          label={`${movie.vote_average} (${movie.vote_count}`}
        />
        <Chip
          icon={<CalendarTodayIcon/>}
          sx={{backgroundColor:'#9197a1'}}
         label={`${movie.release_date}`} />
      </Paper>
      <Paper 
        component="ul" 
        sx={{...root, backgroundColor:'#676e78'}}
      >
        <li>
          <Chip label="Production Countries" sx={{...chip}} color="primary" />
        </li>
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={{...chip, backgroundColor:'#9197a1'}} />
          </li>
        ))}
      </Paper>

      <Typography sx={{paddingTop:'20px', paddingBottom:'20px', color:'white'}}variant="h4" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p" sx={{color:'white'}}>
        {movie.overview}
      </Typography>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
  );
};
export default MovieDetails ;
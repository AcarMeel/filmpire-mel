import { Grid } from "@mui/material";
import React from "react";
import Movie from "../Movie/Movie";
import useStyles from "./styles";

const MovieList = ({ movies }) => {
  const { results } = movies;
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {results.map((movie, index) => (
        <Movie key={movie.id} movie={movie} i={index} />
      ))}
    </Grid>
  );
};

export default MovieList;

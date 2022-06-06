import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import MovieList from "../MovieList/MovieList";

const Movies = () => {
  const { data, isLoading, error } = useGetMoviesQuery({
    genreIdOrCategoryName: null,
    page: 1,
    searchQuery: null,
  });
  return (
    <div>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress size="4rem" />
        </Box>
      ) : error ? (
        <p>Error has ocurred</p>
      ) : !data.results.length ? (
        <Box display="flex" alignItems="center" mt="20px">
          <Typography variant="h4">
            No Movies that match that name
            <br /> Please adjust your search
          </Typography>
        </Box>
      ) : (
        <MovieList movies={data} />
      )}
    </div>
  );
};

export default Movies;

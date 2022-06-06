import React from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  useTheme,
} from "@mui/material";
import { ClassNames } from "@emotion/react";
import { useGetGenresQuery } from "../../services/TMDB";
import genreIcons from '../../assets/genres';
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useSelector } from "react-redux";

const Sidebar = ({ setMobileOpen }) => {
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);
  const dispatch = useDispatch();
  const { data: genresList, isLoading, error } = useGetGenresQuery({
    genreIdOrCategoryName: null,
    page: 1,
    searchQuery: null,
  });
  const theme = useTheme();
  const classes = useStyles();
  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";

  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

    const categories = [
        { label: 'Popular', value: 'popular' },
        { label: 'Top Rated', value: 'top_rated' },
        { label: 'Upcoming', value: 'upcoming' }
    ];
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo }
          alt="Logo"
        />
      </Link>
      <Divider />
      <List>
          <ListSubheader>Categories</ListSubheader>
          {
              categories.map(({label, value}) => (
                <Link key={value} className={classes.links} to="/">
                    <ListItem onClick={() => dispatch(selectGenreOrCategory(value))} button>
                        <ListItemIcon>
                            <img className={classes.genreImage} src={genreIcons[label.toLowerCase()]} alt="Logo" height={30} />
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                </Link>
              ))
          }
      </List>
      <Divider />
      <List>
          <ListSubheader>Genres</ListSubheader>
          {
              isLoading ? (
                <Box display="flex" justifyContent="center">
                  <CircularProgress size="4rem" />
                </Box>
              ) : error ? (
                <p>Error has ocurred</p>
              ) :
              genresList.genres.map(({name, id}) => (
                <Link key={id} className={classes.links} to="/">
                    <ListItem onClick={() => dispatch(selectGenreOrCategory(id))} button>
                        <ListItemIcon>
                            <img className={classes.genreImage} src={genreIcons[name.toLowerCase()]} alt="Logo" height={30} />
                        </ListItemIcon>
                        <ListItemText primary={name} />
                    </ListItem>
                </Link>
              ))
          }
      </List>
    </>
  );
};

export default Sidebar;

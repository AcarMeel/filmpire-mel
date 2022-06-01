import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import { MovieInformation, Actors, Movies, Profile, NavBar } from "./";
import useStyles from "./styles";

// eslint-disable-next-line
const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path={"/movie/:id"} exact>
            <MovieInformation />
          </Route>
          <Route path={"/actors/:id"} exact>
            <Actors />
          </Route>
          <Route path={"/"} exact>
            <Movies />
          </Route>
          <Route path={"/profile/:id"} exact>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;

import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { MovieInformation, Actors,
  Movies,
  Profile,
  NavBar } from './';


// eslint-disable-next-line
const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Switch>
      <Route path={'/movie/:id'} exact>
          <MovieInformation />
        </Route>
        <Route path={'/actors/:id'} exact>
          <Actors />
        </Route>
        <Route path={'/'} exact>
          <Movies />
        </Route>
        <Route path={'/profile/:id'} exact>
          <Profile />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;

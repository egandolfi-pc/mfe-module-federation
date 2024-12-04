import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Landing from './components/Landing';
import About from './components/About';

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    fontSize: '20px',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

export default () => {
  const classes = useStyles();

  return <React.Fragment>
    <main>
      <div className={classes.title}>React App</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </main>
  </React.Fragment>
};
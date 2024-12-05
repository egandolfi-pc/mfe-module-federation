import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactApp from './components/ReactApp';
import VanillaApp from './components/VanillaApp';

const useStyles = makeStyles((theme) => ({
  mfeContainer: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: '1px solid black',
  },
  mfeContainerHeader: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    fontSize: '20px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  mfeInstance: {
    border: '1px dashed black',
    padding: theme.spacing(2),
  },
}));

export default () => {
  const classes = useStyles();

  return <div>
    <h1>MicroFrontEnd PoC - Webpack Module Federation</h1>
    <hr />
    {/* React MFE */}
    <div className={classes.mfeContainer}>
      <div className={classes.mfeContainerHeader}>
        Container for React microfrontend
      </div>
      <div className={classes.mfeInstance}>
        <ReactApp />
      </div>
    </div>
    {/* Vanilla MFE */}
    <div className={classes.mfeContainer}>
      <div className={classes.mfeContainerHeader}>
        Container for Vanilla JS microfrontend
      </div>
      <div className={classes.mfeInstance}>
        <VanillaApp />
      </div>
    </div>
  </div>
};
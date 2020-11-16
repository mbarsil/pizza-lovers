import React from 'react';

import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Login from '../../components/login';
import LoveButton from '../../components/love-button';

import { useStyles } from './App.styles';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6">Pizza lovers</Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.mainContainer}>
        <Login extraClass={classes.login}></Login>
      </div>
      <LoveButton />
    </div>
  );
};

export default App;

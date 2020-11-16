import React, { ReactNode, useState } from 'react';

import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Login from '../../components/login';
import LoveButton from '../../components/love-button';
import TopTenChart from '../../components/top-ten-chart';
import authService from '../../services/auth.service';
import { UserCredentials } from '../../shared/common.interface';

import { getStyles } from './App.styles';

const App: React.FC = () => {
  const classes = getStyles();

  const [appSate, setAppState] = useState({ isAuthenticated: authService.isAuthenticated() });

  const login = (event: UserCredentials): void => {
    const user = authService.signIn(event);

    if (!user) {
      setAppState({ isAuthenticated: true });
    }
  };

  const renderLoginOrButton = (): ReactNode => {
    return (
      <div className={classes.mainContainer}>
        {appSate.isAuthenticated ? (
          <LoveButton extraClass={classes.loveButton} />
        ) : (
          <Login extraClass={classes.login} onSubmit={(event) => login(event)} />
        )}
        <TopTenChart extraClass={classes.topTenChart} />
      </div>
    );
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Typography variant="h6">Pizza lovers</Typography>
          <Button>Login</Button>
        </Toolbar>
      </AppBar>
      {renderLoginOrButton()}
    </div>
  );
};

export default App;

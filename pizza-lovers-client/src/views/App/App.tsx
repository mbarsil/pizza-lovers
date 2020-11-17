import React, { ReactNode, useEffect, useState } from 'react';

import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { UserInfo } from '../../../../pizza-lovers-server/src/pizza-love/pizza-love.interface';
import Login from '../../components/login';
import LoveButton from '../../components/love-button';
import TopTenChart from '../../components/top-ten-chart';
import authService from '../../services/auth.service';
import { socket } from '../../services/socket.service';
import { UserCredentials } from '../../shared/common.interface';

import { getStyles } from './App.styles';

const PIZZA_LOVE_CHANNEL = 'pizzaLove';
const data = [
  { userName: 'Mario', likes: 2 },
  { userName: 'John', likes: 3 },
  { userName: 'Paul', likes: 3 },
  { userName: 'Joe', likes: 4 },
  { userName: 'Kristen', likes: 5 },
  { userName: 'Anne', likes: 7 },
  { userName: 'Connor', likes: 8 },
];

const App: React.FC = () => {
  /**
   * Styles
   */
  const classes = getStyles();

  /**
   * Reach Hooks
   */
  const [appSate, setAppState] = useState({ isAuthenticated: authService.isAuthenticated() });
  const [chartSate, setChartState] = useState(data);

  useEffect(() => {
    socket.on(PIZZA_LOVE_CHANNEL, (data: UserInfo[]) => {
      setChartState(data);
    });

    return () => {
      socket.off(PIZZA_LOVE_CHANNEL);
    };
  }, []);

  /**
   * Component logic
   */
  const login = (event: UserCredentials): void => {
    const user = authService.signIn(event);

    if (!user) {
      setAppState({ isAuthenticated: true });
    }
  };

  const sendPizzaLove = () => {
    // @ts-ignore
    socket.emit(PIZZA_LOVE_CHANNEL, authService.getCurrentUser().userName);
  };

  const renderLoginOrButton = (): ReactNode => {
    return (
      <div className={classes.mainContainer}>
        {appSate.isAuthenticated ? (
          <LoveButton extraClass={classes.loveButton} onClick={() => sendPizzaLove()} />
        ) : (
          <Login extraClass={classes.login} onSubmit={(event) => login(event)} />
        )}
        <TopTenChart extraClass={classes.topTenChart} data={chartSate} />
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

import React, { FunctionComponent, useState } from 'react';

import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { OwnProps } from '../../shared/common.interface';

import { getStyles } from './login.styles';

const classNames = require('classnames');

interface LoginProps extends OwnProps {
  onSubmit: (event: any) => void;
}

const Login: FunctionComponent<LoginProps> = (props: LoginProps) => {
  const classes = getStyles();

  const [loginState, setLoginState] = useState({
    userName: '',
    password: '',
  });

  const handleFormSubmit = () => {
    props.onSubmit(loginState);
  };

  const handleFieldChange = (event: any) => {
    setLoginState({
      ...loginState,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <Card className={classNames(classes.root, props.extraClass)}>
      <form onSubmit={handleFormSubmit} noValidate autoComplete="off">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Sign in
          </Typography>
          <div className={classes.formContainer}>
            <div className={classes.form}>
              <TextField id="userName" label="username" onChange={handleFieldChange} />
              <TextField id="password" label="password" onChange={handleFieldChange} />
            </div>
            <div className={classes.formLogoContainer}>
              <img
                alt="logo"
                className={classes.formLogo}
                src={require('src/assets/images/pizza.svg')}
              />
            </div>
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" type="submit">
            Sign in
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default Login;

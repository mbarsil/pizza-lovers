import React, { FunctionComponent } from 'react';

import { CardContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { getStyles } from './login.styles';

const classNames = require('classnames');

interface OwnProps {
  props?: object;
  extraClass?: string;
}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props: OwnProps) => {
  const classes = getStyles();

  return (
    <Card className={classNames(classes.root, props.extraClass)}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sign in
        </Typography>
        <div className={classes.formContainer}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="username" label="username" />
            <TextField id="password" label="password" />
          </form>
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
        <Button size="small">Sign in</Button>
      </CardActions>
    </Card>
  );
};

export default Login;

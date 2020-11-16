import React, { FunctionComponent } from 'react';

import { getStyles } from './love-button.styles';

interface OwnProps {
  props?: object;
  extraClass?: string;
}

type Props = OwnProps;

const LoveButton: FunctionComponent<Props> = (props: OwnProps) => {
  const classes = getStyles();

  return (
    <div className={classes.formLogoContainer}>
      <img
        alt="logo"
        className={classes.buttonLogo}
        src={require('src/assets/images/pizza-love.svg')}
      />
      <span className={classes.buttonLabel}>Show some love!</span>
    </div>
  );
};

export default LoveButton;

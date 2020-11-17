import React, { FunctionComponent } from 'react';

import { OwnProps, Props } from '../../shared/common.interface';

import { getStyles } from './love-button.styles';

const classNames = require('classnames');

interface LoveButtonProps extends OwnProps {
  onClick: (event: any) => void;
}

const LoveButton: FunctionComponent<LoveButtonProps> = (props: LoveButtonProps) => {
  const classes = getStyles();

  return (
    <div className={classNames(classes.root, props.extraClass)} onClick={props.onClick}>
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

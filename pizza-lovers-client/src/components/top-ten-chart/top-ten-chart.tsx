import React, { FunctionComponent, useState } from 'react';

import { Chart, ArgumentAxis, ValueAxis, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import { Paper } from '@material-ui/core';

import { UserInfo } from '../../../../pizza-lovers-server/src/pizza-love/pizza-love.interface';
import { OwnProps } from '../../shared/common.interface';

import { getStyles } from './top-ten-chart.styles.ts';

const classNames = require('classnames');

interface TopTenChartProps extends OwnProps {
  data: UserInfo[];
}

const TopTenChart: FunctionComponent<TopTenChartProps> = (props: TopTenChartProps) => {
  const classes = getStyles();

  return (
    <Paper className={classNames(classes.root, props.extraClass)}>
      <Chart data={props.data}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="likes" argumentField="userName" />
      </Chart>
    </Paper>
  );
};

export default TopTenChart;

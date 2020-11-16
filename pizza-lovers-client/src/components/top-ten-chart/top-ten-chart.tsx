import React, { FunctionComponent, useState } from 'react';

import { Chart, ArgumentAxis, ValueAxis, BarSeries } from '@devexpress/dx-react-chart-material-ui';
import { Paper } from '@material-ui/core';

import { OwnProps, Props } from '../../shared/common.interface';

import { getStyles } from './top-ten-chart.styles.ts';

const classNames = require('classnames');

const data = [
  { userName: 'Mario', likes: 2 },
  { userName: 'John', likes: 3 },
  { userName: 'Paul', likes: 3 },
  { userName: 'Joe', likes: 4 },
  { userName: 'Kristen', likes: 5 },
  { userName: 'Anne', likes: 7 },
  { userName: 'Connor', likes: 8 },
];

const TopTenChart: FunctionComponent<Props> = (props: OwnProps) => {
  const classes = getStyles();

  const [chartState, setChartState] = useState(data);

  return (
    <Paper className={classNames(classes.root, props.extraClass)}>
      <Chart data={chartState}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="likes" argumentField="userName" />
      </Chart>
    </Paper>
  );
};

export default TopTenChart;

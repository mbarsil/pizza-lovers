import React, { FunctionComponent, useState } from 'react';

import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper } from '@material-ui/core';

import { OwnProps, Props } from '../../shared/common.interface';

import { getStyles } from './top-ten-chart.styles.ts';

const classNames = require('classnames');

const data = [
  { user: 'Mario', population: 2 },
  { user: 'John', population: 3 },
  { user: 'Paul', population: 3 },
  { user: 'Joe', population: 4 },
  { user: 'Kristen', population: 5 },
  { user: 'Anne', population: 7 },
  { user: 'Mario', population: 8 },
];

interface OwnState {
  data: object[];
}

const TopTenChart: FunctionComponent<Props> = (props: OwnProps) => {
  const classes = getStyles();

  const [chartState, setChartState] = useState(data);

  return (
    <Paper className={classNames(classes.root, props.extraClass)}>
      <Chart data={chartState}>
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField="population" argumentField="user" />
      </Chart>
    </Paper>
  );
};

export default TopTenChart;

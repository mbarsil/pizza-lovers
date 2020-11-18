import React from 'react';

// @ts-ignore
import { shallow } from 'enzyme';

import TopTenChart from './top-ten-chart';

const chartData = [
  { userName: 'Mario', likes: 2 },
  { userName: 'John', likes: 3 },
  { userName: 'Paul', likes: 3 },
  { userName: 'Joe', likes: 4 },
  { userName: 'Kristen', likes: 5 },
  { userName: 'Anne', likes: 7 },
  { userName: 'Connor', likes: 8 },
];

describe('', () => {
  it('renders without crashing', () => {
    shallow(<TopTenChart data={chartData} />);
  });
});

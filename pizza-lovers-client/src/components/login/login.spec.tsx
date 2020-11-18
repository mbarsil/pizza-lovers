import React from 'react';

// @ts-ignore
import { shallow } from 'enzyme';

import Login from './login';

describe('', () => {
  it('renders without crashing', () => {
    shallow(<Login onSubmit={(event: any) => null} />);
  });
});

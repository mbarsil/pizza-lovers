import React from 'react';

// @ts-ignore
import { shallow } from 'enzyme';

import LoveButton from './love-button';

describe('', () => {
  it('renders without crashing', () => {
    shallow(<LoveButton onClick={() => null} />);
  });

  it('accepts data handler', () => {
    const handler = () => null;
    const wrapper = shallow(<LoveButton onClick={handler} />);
    expect(wrapper.props().onClick).toEqual(handler);
  });
});

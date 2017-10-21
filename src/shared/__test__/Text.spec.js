import React from 'react';
import { shallow } from 'enzyme';

import Text from './../Text';

describe('<Text />', () => {
  it('should render Text component', () => {
    const text = <Text />;

    expect(text).toMatchSnapshot();
  });
});

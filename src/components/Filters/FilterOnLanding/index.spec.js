import React from 'react';
import { shallow } from 'enzyme';
import FilterOnLanding from './index';

describe('FilterOnLanding', () => {

  const component = shallow(<FilterOnLanding />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check length of input button', () => {
    expect(component.find('input')).toHaveLength(2);
  });
});

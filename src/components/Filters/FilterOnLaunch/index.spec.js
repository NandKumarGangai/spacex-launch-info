import React from 'react';
import { shallow } from 'enzyme';
import FilterOnLaunch from './index';

describe('FilterOnLaunch', () => {

  const component = shallow(<FilterOnLaunch />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check length of input button', () => {
    expect(component.find('input')).toHaveLength(2);
  });
});

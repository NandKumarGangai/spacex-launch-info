import React from 'react';
import { shallow } from 'enzyme';
import FilterOnYears from './index';

describe('FilterOnYears', () => {

  const component = shallow(<FilterOnYears />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check length of input button', () => {
    expect(component.find('input')).toHaveLength(15);
  });
});

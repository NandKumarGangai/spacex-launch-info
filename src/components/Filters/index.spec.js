import React from 'react';
import { shallow } from 'enzyme';
import Filters from './index';
import FilterOnYears from './FilterOnYears';
import FilterOnLaunch from './FilterOnLaunch';
import FilterOnLanding from './FilterOnLanding';

describe('Filters', () => {

  const component = shallow(<Filters />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check FilterOnYears component renders', () => {
    expect(component.find(FilterOnYears)).toHaveLength(1);
  });

  it('Test to check FilterOnLaunch component renders', () => {
    expect(component.find(FilterOnLaunch)).toHaveLength(1);
  });

  it('Test to check FilterOnLanding component renders', () => {
    expect(component.find(FilterOnLanding)).toHaveLength(1);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import LaunchPrograms from './index';
import LaunchProgram from './Program';

describe('LaunchPrograms', () => {
  const props = {
    launchPrograms: [
      {
        mission_name: 'mock name',
      },
    ],
  };
  const component = shallow(<LaunchPrograms {...props} />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check LaunchProgram component renders', () => {
    expect(component.find(LaunchProgram)).toHaveLength(1);
  });
});

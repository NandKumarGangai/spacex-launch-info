import React from 'react';
import { shallow } from 'enzyme';
import LaunchProgram from './index';

describe('LaunchProgram', () => {
  const props = {
    program: {
      mission_name: 'mock name',
      links: {
        mission_patch_small: 'asddasd',
      },
      rocket: {
        first_stage: {
          cores: [
            {
              land_success: true,
            },
          ],
        },
      },
    },
  };
  const component = shallow(<LaunchProgram {...props} />);

  it('Test to check component renders', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Test to check LaunchProgram component renders', () => {
    expect(component.find('.title')).toHaveLength(1);
  });
});

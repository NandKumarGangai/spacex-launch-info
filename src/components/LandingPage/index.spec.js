import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './index';

describe('LandingPage', () => {
    const component = shallow(<LandingPage />);

    it('Test to check component renders', () => {
        expect(component.exists()).toBeTruthy();
    });
});


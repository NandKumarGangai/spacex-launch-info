import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './index';
import Filters from '../Filters';
import LaunchPrograms from '../LaunchPrograms';

describe('LandingPage', () => {
    const component = shallow(<LandingPage />);

    it('Test to check component renders', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Test to check Filters component renders', () => {
        expect(component.find(Filters)).toHaveLength(1);
    });

    it('Test to check Filters component renders', () => {
        expect(component.find(LaunchPrograms)).toHaveLength(1);
    });
});


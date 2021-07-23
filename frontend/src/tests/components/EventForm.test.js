import React from 'react';
import { create } from 'react-test-renderer';
import EventForm from '../../Components/EventForm/EventForm';

describe('Component TextInput', () => {
    it('Should render correctly', () => {
        const component = create(<EventForm value='mateusz'/>);
        expect(component.toJSON()).toMatchSnapshot();
    });
})
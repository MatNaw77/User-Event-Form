import React from 'react';
import { act, create } from 'react-test-renderer';
import TextInput from '../../Components/EventForm/controls/TextInput'

describe('Component TextInput', () => {
    let component = {};

    beforeAll(() => {
        component = create(<TextInput value='mateusz'/>);
    });

    it('Should render correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should update correctly', () => {
        act(() => {
            component.update(<TextInput value='lukasz'/>);
        })

        expect(component.toJSON()).toMatchSnapshot();
    });
})
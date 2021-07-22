import React from 'react';
import { act, create } from 'react-test-renderer';
import EmailInput from '../../Components/EventForm/controls/EmailInput'

describe('Component EmailInput', () => {
    let component = {};

    beforeAll(() => {
        component = create(<EmailInput value='mateusz'/>);
    });

    it('Should render correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should update correctly', () => {
        act(() => {
            component.update(<EmailInput value='mateusz.nawrat@icloud.com'/>);
        })

        expect(component.toJSON()).toMatchSnapshot();
    });
})
import React from 'react';
import { act, create } from 'react-test-renderer';
import DatePicker from '../../Components/EventForm/controls/DatePicker'

describe('Component DatePicker', () => {
    let component = {};

    beforeAll(() => {
        component = create(<DatePicker value='2021-12-12'/>);
    });

    it('Should render correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('Should update correctly', () => {
        act(() => {
            component.update(<DatePicker value='1992-12-02'/>);
        })

        expect(component.toJSON()).toMatchSnapshot();
    });
})
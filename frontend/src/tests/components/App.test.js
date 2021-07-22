import React from 'react';
import renderer, { act, create } from 'react-test-renderer';
import App from '../../App';

describe('Component App', () => {
  it('Should render correctly', () => {
    const component = renderer.create(<App />).toJSON();
    expect(component).toMatchSnapshot();
  });
})
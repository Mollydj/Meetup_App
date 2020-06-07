import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents'

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents/>);
    });

    // FEATURE 2

  test('render number of events shown on page', () => {
    expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
  });

  test('textbox showing number of events renders', () => {
    expect(NumberOfEventsWrapper.find('.EventsEntry')).toHaveLength(1);
  });

  test('change state when text input changes', () => {
    const eventObject = { target: { value: '72' }};
    NumberOfEventsWrapper.find('.EventsEntry').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventsShown')).toBe('72');
  });

  test('show details on click', () => {
    NumberOfEventsWrapper.find('.EventDetails').at(0).simulate('click');
    expect(NumberOfEventsWrapper.state('details')).toBe(true);
    //console.log(NumberOfEventsWrapper.state('details'))
  });

  test('hide details on click', () => {
    NumberOfEventsWrapper.find('.EventDetails').at(0).simulate('click');
    expect(NumberOfEventsWrapper.state('details')).toBe(false);
    //console.log(NumberOfEventsWrapper.state('details'))
  });
  
  

});

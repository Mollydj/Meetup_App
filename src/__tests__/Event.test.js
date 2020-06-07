import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Event from '../Event'

describe('<Event /> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event/>);
    });

    // FEATURE 2

  test('show details on click', () => {
    EventWrapper.find('.EventDetails').at(0).simulate('click');
    expect(EventWrapper.state('details')).toBe(true);
    //console.log(EventWrapper.state('details'))
  });

  test('hide details on click', () => {
    EventWrapper.find('.EventDetails').at(0).simulate('click');
    expect(EventWrapper.state('details')).toBe(false);
    //console.log(EventWrapper.state('details'))
  });
  
  

});

import EventList from '../EventList';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';


describe('<App/> component', () => {

    test('render list of events', () => { // test description
        const AppWrapper = shallow(<App />); //renders component allos you to call shallow rendered App component
        expect(AppWrapper.find(EventList)).toHaveLength(1); // search for the event list 
        //to make this test pass, code written later must renders an eventlist component.
      });
});
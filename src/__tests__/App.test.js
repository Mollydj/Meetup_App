import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App/> component', () => {

    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App/>);
    });

    // FEATURE 1 

    test('render list of events', () => { // test description
        //const AppWrapper = shallow(<App />); //renders component allos you to call shallow rendered App component
        expect(AppWrapper.find(EventList)).toHaveLength(1); // search for the event list 
        //to make this test pass, code written later must renders an eventlist component.
      });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    // FEATURE 2

    test('render number of events shown on page', () => {
        const NumberOfEventsWrapper = shallow(<App />);
        expect(NumberOfEventsWrapper.find(NumberOfEvents)).toHaveLength(1);
      });
});
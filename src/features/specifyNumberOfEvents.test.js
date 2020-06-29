import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import App from "../App";
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let NumberWrapper;

    beforeAll(() => {
        NumberWrapper = shallow(<NumberOfEvents  />);
        AppWrapper = mount(<App/>);
    });

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the page had loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user hasnt specified the number events per page', () => {
            //remains blank
        
        });

        then('the default amount of items will appear on a page', () => {
            expect(NumberWrapper.state('eventsShown')).toBe(32);
        });
    });


        test('User can change the number of events they want to see', ({ given, when, then }) => {
            let AppWrapper;
            given('user opened the app', () => {
              AppWrapper = mount(<App />);
            });
        
            when('the user specified the number of events', () => {
              const eventNumber = { target: { value: 5 } };
              AppWrapper.find('.NumberOfEvents').simulate('change', eventNumber);
            });
        
            then('the maximum of specified number of events will be displayed', () => {
              const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
             // console.log(NumberOfEventsWrapper);
             expect(NumberOfEventsWrapper.state('eventsShown')).toBe(32);
            });
    });
});
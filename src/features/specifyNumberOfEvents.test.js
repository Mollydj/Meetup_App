import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    let NumberWrapper;

    beforeAll(() => {
        NumberWrapper = mount(<NumberOfEvents/>);
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
        
        given('the events list has loaded', () => {
            AppWrapper = mount(<App />);
        });

        when('the user changes the number events per page', () => {
            const eventObject = { target: { value: 10 }};
            NumberWrapper.find('.EventsEntry').simulate('change', eventObject);
            expect(NumberWrapper.state('eventsShown')).toBe(10);
        });

        then('the number of items on the events list will change to the users preference.', () => {
            expect(NumberWrapper.state('eventsShown')).toBe(10);
        });
    });
});
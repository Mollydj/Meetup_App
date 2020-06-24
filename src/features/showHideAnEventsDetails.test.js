import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import { mockEvents } from "../mock-events";
import CitySearch from "../CitySearch";


const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
 let AppWrapper;

  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("user opens the app", () => {
        AppWrapper = mount(<App />);
    }); 
    //done

    when("the user hasn't clicked on anything", () => {});

    then("the user should see the list of collapsed events", () => {
        AppWrapper.update();
        expect(AppWrapper.find(".Event")).toHaveLength(
          mockEvents.events.length
        );
    });
    //done
  });

  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {
           AppWrapper = mount(<App />);
    });

    when("a user clicks the details button", () => {});

    then("the user should see more details of the event", () => {});
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("the event details are showing", () => {});

    when("a user clicks the details button", () => {});

    then("then the use should not see the event details", () => {});
  });
});

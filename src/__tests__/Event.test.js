import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Event from "../Event";
import { mockEvents } from "../mock-events";

describe("<Event /> component", () => {
  let EventWrapper;
  const events = {
    created: 1563366230000,
    duration: 3600000,
    id: "263222596",
    name: "1 Million Cups Augusta at theClubhou.se",
    date_in_series_pattern: false,
    status: "upcoming",
    time: 1565179200000,
    local_date: "2019-08-07",
    local_time: "08:00",
    updated: 1563366230000,
    utc_offset: -14400000,
    waitlist_count: 0,
    yes_rsvp_count: 21,
    venue: {
      id: 25900005,
      name: "Georgia Cyber Center Hull Mcknight Building",
      lat: 33.459999084472656,
      lon: -81.97000122070312,
      repinned: false,
      address_1: "1 11th St",
      city: "Augusta",
      country: "us",
      localized_country_name: "USA",
      zip: "30901",
      state: "GA",
    },
    is_online_event: false,
    group: {
      created: 1281014308000,
      name: 'Williamsburg French Language Group',
      id: 1686219,
      join_mode: 'open',
      lat: 40.709999084472656,
      lon: -73.94999694824219,
      urlname: 'Williamsburg-French-Language-Meetup-Group',
      who: 'Members',
      localized_location: 'Brooklyn, NY',
      state: 'NY',
      country: 'us',
      region: 'en_US',
      timezone: 'US/Eastern',
    },
  };
  

  beforeAll(() => {
    EventWrapper = shallow(<Event event={events} />);
  });

  // FEATURE 2

  test("details button renders", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("show details on click", () => {
    EventWrapper.find(".details-btn").at(0).simulate("click");
    expect(EventWrapper.state("details")).toBe(true);
  });

  test("hide details on click", () => {
    EventWrapper.find(".details-btn").at(0).simulate("click");
    expect(EventWrapper.state("details")).toBe(false);
  });

  test("set mock eventdata as state", () => {
    EventWrapper.setState({ events });
    expect(EventWrapper.state("events").name).toBe(
      "1 Million Cups Augusta at theClubhou.se"
    );
  });
});

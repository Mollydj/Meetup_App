import React, { Component } from "react";

class Event extends Component {
  state = {
    details: false,
    showEvents: {
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
        state: "GA"
        }

    }

};

  
  handleShowDetails = (event) => {
    this.state.details === false
      ? this.setState({ details: true })
      : this.setState({ details: false });
  };

//time, local_date, name, x, es_rsvp_count, 

  render() {
    return (
      <div className="Event">
        <div className="EventDetails" >
            <div className="eventName">{this.state.showEvents.name}</div>
          <button className="detailsButton" onClick={this.handleShowDetails}>details</button>
        </div>
      </div>
    );
  }
}

export default Event;

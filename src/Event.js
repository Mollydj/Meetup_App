import React, { Component } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

class Event extends Component {
  state = {
    details: false,
    events: [],
  };

  handleShowDetails = () => {
    this.state.details === false
      ? this.setState({ details: true })
      : this.setState({ details: false });
  };

  getData = () => {
    const yesCount = this.props.event.yes_rsvp_count;
    const spotsRemain = this.props.event.rsvp_limit - yesCount;
    const openSeats = [
      { name: "Attendees", yes_rsvp_count: this.props.event.yes_rsvp_count },
      { name: "Spots Remaining", rsvp_limit: spotsRemain },
      { name: "Total", rsvp_limit: this.props.event.rsvp_limit },
    ];     
    return openSeats;
  };

  render() {
    const event = this.props.event;
    const eventLocation = event.group.localized_location;
    const people =
      this.props.event.yes_rsvp_count > 1
        ? " people attening"
        : " person going";

    return (
      <div className="Event">
        <p className="timeAndDate">
          {event.local_time} {event.local_date}
        </p>
        <div className="name">
          <b>{event.name}</b>



        </div>
        {event.yes_rsvp_count}
        {people}
        <br />
        <p className="going">{eventLocation}</p>
        <button className="details-btn" onClick={this.handleShowDetails}>
          details
        </button>
        {this.state.details && (
          <div className="extra">
            {event.description}
            <br />
            <ResponsiveContainer height={400}>
            <PieChart>
              <Pie
                dataKey="rsvp_limit"
                name="Limit"
                data={this.getData()}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#ff0000"
                label
              />
              <Pie
                dataKey="yes_rsvp_count"
                name="rsvps"
                data={this.getData()}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#BF2B26"
                
              />

              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            </PieChart>
          </ResponsiveContainer>


            <p className="going">{event.visibility}</p>
            <a href={event.link}>Event Link</a>
          </div>
        )}
      </div>
    );
  }
}

export default Event;

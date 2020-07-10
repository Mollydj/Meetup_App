import React, { Component } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

class Event extends Component {
  state = {
    details: false,
    events: [],
  };

  handleShowDetails = () => {
    //    this.state.details = this.setState({ details: !true });
    this.state.details === false
      ? this.setState({ details: true })
      : this.setState({ details: false });
  };

  getData = () => {
    const openSeats = []; // Create empty array for the next 7 days
    console.log(this.state.events)
    const yesCount = 4;
    const waitList = 1;
    //const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    //for (let i = 0; i < 7; i += 1) {
    // currentDate.add(1, "days"); // Add 1 day to current date, currentDate changes
    //  const dateString = currentDate.format("YYYY-MM-DD"); // Format the date
    // Use the countEventsOnADate function to count #events on this date
    // const count = this.countEventsOnADate(dateString);
    openSeats.push({ yes_rsvp_count: yesCount, waitlist_count: waitList }); // Add this date and number to the list

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

          <ResponsiveContainer height={400}>
          <PieChart>
              <Pie
                isAnimationActive={false}
                dataKey="yes_rsvp_count"
                data={this.getData()}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#ff0000"
                label
              />
              <Pie
                dataKey="waitlist_count"
                data={this.getData()}
                cx={500}
                cy={200}
                innerRadius={40}
                outerRadius={80}
                fill="#ff0000"
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>


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
            <p className="going">{event.visibility}</p>
            <a href={event.link}>Event Link</a>
          </div>
        )}
      </div>
    );
  }
}

export default Event;

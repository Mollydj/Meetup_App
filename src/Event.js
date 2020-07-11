import React, { Component } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

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

  render() {
    const event = this.props.event;
    const colors = ["#ff0000", "#B80000"];
    const eventLocation = event.group.localized_location;
    const people =
      this.props.event.yes_rsvp_count > 1
        ? " people attening"
        : " person going";


    const data = [
      { name: "attendees", value: event.yes_rsvp_count },
      { name: "spots remaining", value: event.rsvp_limit - event.yes_rsvp_count },
    ];

    return (
      <div className="Event">
        <p className="timeAndDate">
          {event.local_time} {event.local_date}
        </p>
        <div className="name">
          <b>{event.name}</b>
        </div>
        {event.yes_rsvp_count} " Attendees"
        
     
        <br />

        {this.props.event.rsvp_limit && this.props.event.yes_rsvp_count ? //ask Trey about this
        <div className="EventChart">
            <ResponsiveContainer height={150} width={250}>
              <PieChart>
                <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={32} label >
                  {
                    data.map((entry, index) => (<Cell key={`cell-${index}`} fill={colors[index]} />))
                  }
                </Pie>
                <Legend iconSize={10} iconType="triangle" layout="horizontal" verticalAlign="bottom" align="center" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            </div>
            : ''
          }

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

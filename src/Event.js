import React, { Component } from "react";

class Event extends Component {
  state = {
    details: false,
  };

  handleShowDetails = () => {
    //    this.state.details = this.setState({ details: !true });
    this.state.details === false
      ? this.setState({ details: true })
      : this.setState({ details: false });
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
          {event.description}<br/>
          <p className="going">{event.visibility}</p>
          <a href={event.link}>Event Link</a>
        </div>
        
        )}
      </div>
    );
  }
}

export default Event;

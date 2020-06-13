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
    const people = this.props.event.yes_rsvp_count > 1 ? ' people attening' : ' person going';

    return (
      <div className="Event">
        {event.local_time} |
        {event.local_date}
        <div className="EventName">{event.name}</div>
        {event.yes_rsvp_count}  {people} 
        {event.group.localized_location}
        <div className="EventDetails"></div>
        <button className="detailsButton" onClick={this.handleShowDetails}>
          details
        </button>
      </div>
    );
  }
}

export default Event;

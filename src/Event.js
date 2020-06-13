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
    const event = this.props.event ;
    return (
      <div className="Event">
            <div className="EventName">{event.name}</div>
        <div className="EventDetails">
      
          <button className="detailsButton" onClick={this.handleShowDetails}>
            details
          </button>
        </div>
      </div>
    );
  }
}

export default Event;

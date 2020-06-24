import React, { Component } from "react";
import "./App.css";
import "./Event";

class NumberOfEvents extends Component {
  state = {
    eventsShown: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsShown: value });
    
  }

  render() {
    return (
      <div className="NumberOfEvents" >
        
        <input
          type="text"
          className="EventsEntry"
          value={this.state.eventsShown}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;

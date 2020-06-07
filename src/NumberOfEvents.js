import React, { Component } from "react";
import "./App.css";

class NumberOfEvents extends Component {
  state = {
    eventsShown: "",
    details: false,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsShown: value });
    //Takes the value from the input updates the state of 'query' based on that value
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <div className="EventDetails"> </div>

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

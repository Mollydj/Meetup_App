import React, { Component } from "react";
import "./App.css";
import "./Event";

class NumberOfEvents extends Component {
  state = {
    eventsShown: "36",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsShown: value });
    //Takes the value from the input updates the state of 'query' based on that value
  };



  render() {
    return (
      <div className="NumberOfEvents" >
        <Event/>
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

import React, { Component } from "react";
import "./App.css";
import "./Event";

class NumberOfEvents extends Component {
  state = {
    page: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ page: value });
    //Takes the value from the input updates the state of 'query' based on that value
  };



  render() {
    return (
      <div className="NumberOfEvents" >
        
        <input
          type="text"
          className="EventsEntry"
          value={this.state.page}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;

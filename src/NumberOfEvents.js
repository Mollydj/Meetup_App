import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventsShown: 32
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ eventsShown: value });
    this.props.updateEvents(null, null, value);

    if (value <= 0) {
      this.setState({
        errorText: 'Positive numbers only please!',
        eventtsShown:0
      });
      console.log(this.state);
    } else {
      this.setState({
        errorText: '',
      });
      console.log(this.state);
    }

  }

  render() {
    return (
      <div className="NumberOfEvents" >
        <input
          type="number"
          className="EventsEntry"
          onChange={this.handleInputChanged}
          value={this.state.eventsShown}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;

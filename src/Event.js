import React, { Component } from 'react';

class Event extends Component {
    state = {
        details: false,
    }

    handleShowDetails = (event) => { 
        this.state.details === false ? this.setState({ details: true}) : this.setState({ details: false});
      };
      
    render() {
        return (
            <ul className="Event">
<div className="EventDetails" value={this.state.details} onClick={this.handleShowDetails}> </div>
            </ul>
        );
    }
}

export default Event;
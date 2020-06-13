import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

componentDidMount(){
  getEvents().then(response => this.setState({ events: response }));
}
  state = {
    events: [],
    lat:'',
    long:'',
  }

  

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

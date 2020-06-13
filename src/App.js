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

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(response =>
        this.setState({ events: response, lat, lon })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(
        response => this.setState({ events: response })
      );
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Meetup React API</h1>
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents/>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

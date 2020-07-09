import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import './api';
import { OnlineAlert } from './Alert';

class App extends Component {
  state = {
    events: [],
    page: null,
  };

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events => 
        this.setState({ events, lat, lon })
        );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events => 
        this.setState({ events, page })
        );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events => 
        this.setState({ events })
      );
    } 


    if (navigator.onLine === false) {
      this.setState({
        onlineText: ''
      })
      console.log('user is offline');
  }
  
    return this.updateEvents;

    
  }

  

  render() {
    
    return (
      <div className="App">
        <OnlineAlert text={this.state.onlineText} />
        <h1>Meetup React API</h1>
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;


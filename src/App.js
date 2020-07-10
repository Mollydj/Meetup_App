import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import "./api";
import { OnlineAlert } from "./Alert";
import moment from "moment";
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    page: null,
  };

  componentDidMount() {
    this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (!navigator.onLine) {
      this.setState({
        onlineText: "Working Offline... ",
      });
    } else {
      this.setState({
        onlineText: "",
      });
    }

    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((events) =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((events) =>
        this.setState({ events, page })
      );
    } else {
      getEvents(
        this.state.lat,
        this.state.lon,
        this.state.page
      ).then((events) => this.setState({ events }));
    }

    return this.updateEvents;
  };

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  };

  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, "days"); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format("YYYY-MM-DD"); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  };

  render() {
    return (
      <div className="App">
        <OnlineAlert text={this.state.onlineText} />
        <h1>Meetup React API</h1>
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />

        <ResponsiveContainer height={400}>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="category" dataKey="date" name="date"/>
          <YAxis type="number" dataKey="number" name="number of events" />
          <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter data={this.getData()} fill="#FF0000" />
          
        </ScatterChart>
        </ResponsiveContainer>

        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

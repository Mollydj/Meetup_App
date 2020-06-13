import React, { Component } from 'react';
import { getSuggestions } from "./api";

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: []
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
       this.setState({query: value});
       getSuggestions(value).then(suggestions => this.setState({suggestions}));
        //Takes the value from the input updates the state of 'query' based on that value
    }

    handleItemClicked = (value, lat, lon) => {
        this.setState({ query: value, suggestions: [] });
        this.props.updateEvents(lat, lon);
      }

    render() {
        return (
            <div className="CitySearch">
                <input type="text" className="city" value={this.state.query} onChange={this.handleInputChanged}/>
                   
                    <ul className="suggestions">
                      {this.state.getSuggestions.map(item =>
                        <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>{item.name_string}</li>
                    )}
                    </ul>
            </div>
        );
    }
}

export default CitySearch;
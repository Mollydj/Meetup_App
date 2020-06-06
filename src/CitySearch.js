import React, { Component } from 'react';

class CitySearch extends Component {

    state = {
        query: 'Munich',
        suggestions: [
                {
                "city": "Brooklyn",
                "country": "us",
                "localized_country_name": "USA",
                "state": "NY",
                "name_string": "Brooklyn, New York, USA",
                "zip": "11201",
                "lat": 40.7,
                "lon": -73.99
                },
                {
                "city": "Brooklyn Heights",
                "country": "us",
                "localized_country_name": "USA",
                "state": "OH",
                "name_string": "Brooklyn Heights, Ohio, USA",
                "zip": "44131",
                "lat": 41.38,
                "lon": -81.66
                }
        ]
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({query: value});
        //Takes the value from the input updates the state of 'query' based on that value
    }

    render() {
        return (
            <div className="CitySearch">
                <input type="text" className="city" value={this.state.query} onChange={this.handleInputChanged}/>
                    <ul className="suggestions">
                      {this.state.suggestions.map(item =>
                        <li key={item.name_string}>{item.name_string}</li>
                    )}
                    </ul>
            </div>
        );
    }
}

export default CitySearch;
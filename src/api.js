import { mockEvents } from './mock-events';

async function getSuggestions(query) {
    return [
        {
            city: "Brooklyn",
            country: "us",
            localized_country_name: "USA",
            state: "NY",
            name_string: "Brooklyn, New York, USA",
            zip: "11201",
            lat: 40.7,
            lon: -73.99,
          },
          {
            city: "Brooklyn Heights",
            country: "us",
            localized_country_name: "USA",
            state: "OH",
            name_string: "Brooklyn Heights, Ohio, USA",
            zip: "44131",
            lat: 41.38,
            lon: -81.66,
          }
    ];

}

async function getEvents(lat, lon) {
    return mockEvents.events;
  }

////////
  function getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
  }

  function getItem() {
    
  }

export { getSuggestions, getEvents };



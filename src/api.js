import { mockEvents } from './mock-events';
import axios from 'axios';

async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === 'get') {
    url = 'https://nfam6pi2sc.execute-api.us-east-1.amazonaws.com/dev/api/token/'
      + key;
  } else if (type === 'renew') {
    url = 'https://nfam6pi2sc.execute-api.us-east-1.amazonaws.com/dev/api/refresh/'
      + key;
  }

  const tokenInfo = await axios.get(url);

  localStorage.setItem('access_token', tokenInfo.data.access_token);
  localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
  localStorage.setItem('last_saved_time', Date.now());

  return tokenInfo.data.access_token;
}



async function getAccessToken(){
  const accessToken = localStorage.getItem('access_token')

  if (!accessToken){
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (!code) {
      window.location.href = 'https://secure.meetup.com/oauth2/authorize?client_id=d86a49odvrqdkcnn98ttvqa4ro&response_type=code&redirect_uri=https://mollydj.github.io/Meetup_App/';
      return null;
    }
    return getOrRenewAccessToken('get', code);
  };

  const lastSavedTime = localStorage.getItem('last_saved_time');

  if (accessToken && (Date.now() - lastSavedTime < 3600000)) {
    return accessToken;
  }

  const refreshToken = localStorage.getItem('refresh_token');
  return getOrRenewAccessToken('renew', refreshToken);
}



async function getSuggestions(query) {
  if (window.location.href.startsWith('http://localhost')) {
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
          },
    ];
  }

  const token = await getAccessToken();
  if (token) {
    const url = 'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query='
      + query
      + '&access_token=' + token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}



async function getEvents(lat, lon, page) {
  if (window.location.href.startsWith('http://localhost')) {
    return mockEvents.events;
  }
  
  if (!navigator.onLine) {
    const events = localStorage.getItem('lastEvents');
    return JSON.parse(events);
  }

  const token = await getAccessToken();
  if (token) {
    let url = 'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
      + '&access_token=' + token;
    // lat, lon is optional, if we have lat and lon, then we can add them
    if (lat && lon) {
      url += '&lat=' + lat + '&lon=' + lon;
    }
    if (page) {
      url += '&page=' + page;
    }
    const result = await axios.get(url);
    const events = result.data.events;
      if (events.length) {
        localStorage.setItem('lastEvents', JSON.stringify(events));
      }

      return events;
  }
  return [];
}



export { getSuggestions, getEvents };

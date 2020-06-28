import { mockEvents } from "./mock-events";
import axios from "axios";
import App from "./App";

async function getSuggestions(query) {
  if (window.location.href.startsWith("http://localhost")) {
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
    const url =
      "https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=" +
      query +
      "&access_token=" +
      token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}

async function getEvents(lat, lon, page) {
  if (window.location.href.startsWith("http://localhost")) {
    return mockEvents.events;
  }

  //checking to see if online
  if (!navigator.onLine) {
    const events = localStorage.getItem("lastEvents");
    return JSON.parse(events);
  }

  const token = await getAccessToken();
  if (token) {
    let url =
      "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public" +
      "&access_token=" +
      token;

    if (lat && lon) {
      url += "&lat=" + lat + "&lon=" + lon;
    }

    if (page) {
      url += "&page=" + page;
    }

    const result = await axios.get(url);
    const events = result.data.events;

    if (events.length) {
      localStorage.setItem("lastEvents", JSON.stringify(events));
    }

    return events;
  }
  return [];
}

//ACCESS TOKEN CHECKING
async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === "get") {
    //lambda endpoint to get token by code
    url =
      "https://ueg2lqopz6.execute-api.us-east-2.amazonaws.com/dev/api/token/" +
      key;
  } else if (type === "renew") {
    //Lambda endpoint to get refresh token
    url =
      "https://ueg2lqopz6.execute-api.us-east-2.amazonaws.com/dev/api/refresh/" +
      key;
  }
  //axios to get request to endpoint
  const tokenInfo = await axios.get(url);

  //save tokens to localStorage together with timestamp
  localStorage.setItem("access_token", tokenInfo.data.access_token);
  localStorage.setItem("refresh_token", tokenInfo.data.refresh_token);
  localStorage.setItem("last_saved_time", Date.now());

  //return the access token
  return tokenInfo.data.access_token;
}

async function getAccessToken() {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (!code) {
      window.location.href =
        "https://secure.meetup.com/oauth2/authorize?client_id=337jbe8sopjh7q62t45t732omi&response_type=code&redirect_uri=https://tdnicola.github.io/meetup";
      return null;
    }
    return getOrRenewAccessToken("get", code);
  }

  const lastSavedTime = localStorage.getItem("last_saved_time");

  if (accessToken && Date.now() - lastSavedTime < 3600000) {
    return accessToken;
  }

  const refreshToken = localStorage.getItem("refresh_token");
  return getOrRenewAccessToken("renew", refreshToken);
}

export { getSuggestions, getEvents };

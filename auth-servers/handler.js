'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=d86a49odvrqdkcnn98ttvqa4ro'
    + '&client_secret=48ckqjtpqrcrusksp5qosi3090'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://mollydj.github.io/Meetup_App/'
    + '&code=' + event.pathParameters.code;
  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
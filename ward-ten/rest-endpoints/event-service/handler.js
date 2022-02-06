'use strict';
const request = require('request-promise')

module.exports.getEvents = async (event, context, callback) => {
  let now = new Date();
  let yearLater = new Date(new Date().setFullYear(now.getFullYear() + 1))
  let allowedSites = ["https://www.ward10dems.org", "www.ward10dems.org", "https://ward10dems.org"]
  let originHeader = event['headers']['origin']
  console.log("origin header:", originHeader)
  if (!allowedSites.includes(originHeader)) {
    callback(null, {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': originHeader,
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        error: "not authorized",
      }, null, 2),
    })
  }
  const options = {
    method: 'GET',
    uri: 'https://www.googleapis.com/calendar/v3/calendars/bostonward10%40gmail.com/events',
    qs: {
      key: process.env.API_KEY,
      orderBy: 'startTime',
      singleEvents: true,
      timeMax: yearLater,
      timeMin: now
    },
    json: true
  }


  await request(options)
    .then(function (res) {
      let eventList = res;
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': originHeader,
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          data: eventList.items,
        }, null, 2)
      })
    })
    .catch(function (err) {
      console.log("we got an error");
      callback(err, {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': originHeader,
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          error: err,
        }, null, 2),
      }
      );
    });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

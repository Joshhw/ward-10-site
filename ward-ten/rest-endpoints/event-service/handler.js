'use strict';
const request = require('request-promise')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.getEvents = async (event, context, callback) => {
  let now = new Date();
  let yearLater = new Date(new Date().setFullYear(now.getFullYear() + 1))

  const options = {
    method: 'GET',
    uri: 'https://www.googleapis.com/calendar/v3/calendars/bostonward10%40gmail.com/events',
    qs: {
      key : process.env.API_KEY,
      orderBy: 'startTime',
      singleEvents: true,
      timeMax: yearLater,
      timeMin: now
    },
    json:true
  }

  console.log("about to make request");
  console.log(options);
  await request(options)
    .then(function(res) {
      console.log("request object:" + res)
      let eventList = res;

      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          data: eventList.items,
        }, null, 2)
    })})
    .catch( function(err) {
      console.log("we got an error");
      callback(err, {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify({
          error: err,
        }, null, 2),
      }
    );
    console.log("after request call");
    });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

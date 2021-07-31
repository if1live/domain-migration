'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.redirect = async (event) => {
  const path = event.requestContext.http.path;
  const host = 'https://if1live.github.io';
  const location = `${host}${path}`;
  return {
    statusCode: 301,
    headers: {
      Location: location,
    },
    body: '',
  };
};
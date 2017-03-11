// call the packages we need
const express = require('express');
const app = express();

// importing config.js
const {PORT} = require('./config');

// initial endpoint setup
app.get('/', function (request, response, next) {
  response.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Server listening on Port 3000');
});

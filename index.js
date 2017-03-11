// call the packages we need
const express = require('express');
const app = express();
const request = require('superagent');

// importing config.js
const {PORT, API} = require('./config');

// importing controls for routes
const {People} = require('./controllers');

//***********1 task- display array of people***********//
app.get('/people', function (req, res, next) {
  request
  .get(`${API}/people`)
  .end((error, people) => {
    if (error) console.log(error)
    else res.send(People.peopleData(people.body));
  });
});

app.listen(PORT, function () {
  console.log('Server listening on Port 3000');
});

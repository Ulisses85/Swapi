// call the packages we need
const express = require('express');
const app = express();
const request = require('superagent');

// importing config.js
const {PORT, API} = require('./config');

// importing controls for routes
const {People, Planet, Films} = require('./controllers');

//***********1 task- display array of people***********//
app.get('/people', function (req, res, next) {
  request
  .get(`${API}/people`)
  .end((error, people) => {
    if (error) console.log(error)
    else res.send(People.peopleData(people.body));
  });
});

//***********task 2 planet with the longest orbital***********//

  app.get('/planet', function (req, res, next) {
    request
    .get(`${API}/planets`)
    .end((error, planets) => {
      if (error) console.log(error);
      else {
        res.status(200).send(
          {Name: Planet.longestOrbital(planets.body).name, orbitalPeriod: Planet.longestOrbital(planets.body).orbital_period}
      )};
    });
  });

  //***********task 3 directors and films ***********//

  app.get('/films', function (req, res, next) {
    request
    .get(`${API}/films`)
    .end((error, films) => {
      if (error) console.log(error);
      else {
        res.status(200).send(Films.directors(films.body));
      }
    });
  });

app.listen(PORT, function () {
  console.log('Server listening on Port 3000');
});

const request = require('supertest'); // framework for testing API
const expect = require('chai').expect; // javascript functionality testing framework

///********test suite for the task*************///
describe('Test for the tasks', () => {

//********TEST 1task************//
  it('should return an array with characters names', (done) => {
    request('http://localhost:3000')
    .get('/people')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).to.be.an('array');
      expect(res.body[0]).to.be.a('string');
      expect(res.body[0]).to.equal('Luke Skywalker');
      expect(res.body[res.body.length-1]).to.equal('Obi-Wan Kenobi');
      expect(res.body.length).to.equal(10);
      done();
    });
  });

  //********TEST 2nd task*************//
  it('should return the biggest planet\'s name and orbital period', (done) => {
    request('http://localhost:3000')
    .get('/planet')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.key('Name', 'orbitalPeriod');
      done();
    });
  });
  //********TEST for the 3rd task*************//
  it('return and array of directors with their films', (done) => {
    request('http://localhost:3000')
    .get('/films')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).to.be.an('array');
      expect(res.body.length).to.equal(4);
      expect(res.body[0]).to.have.key('films', 'name');
      expect(res.body[0].name).to.be.a('string');
      expect(res.body[0].name).to.equal('George Lucas');
      done();
    });
  });
  //********TEST 4th task*************//
  it('should return a object Luke Skywalker with vehicles property used by the character', (done) => {
    request('http://localhost:3000')
    .get('/vehicles')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.key('name', 'vehicles');
      expect(res.body.name).to.be.a('string');
      expect(res.body.name).to.equal('Luke Skywalker');
      expect(res.body.vehicles).to.be.an('array');
      done();
    });
  });
})

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
});

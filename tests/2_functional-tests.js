const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  // Timeout 5 seconds
  this.timeout(5000);

  // URL/api/convert/?input=10L
  test('10L', (done) => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: '10L' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body.initNum, 10);
        assert.equal(res.body.initUnit, 'L');
        assert.equal(res.body.returnNum, 2.64172);
        assert.equal(res.body.returnUnit, 'gal');
        assert.equal(res.body.string, '10 liters converts to 2.64172 gallons');
        done();
      });
  });

  // URL/api/convert/?input=kg
  test('kg', (done) => {
    chai
      .request(server)
      .get('/api/convert')
      .query({ input: 'kg' })
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.type, 'application/json');
        assert.equal(res.body.initNum, 1);
        assert.equal(res.body.initUnit, 'kg');
        assert.equal(res.body.returnNum, 2.20462);
        assert.equal(res.body.returnUnit, 'lbs');
        assert.equal(res.body.string, '1 kilograms converts to 2.20462 pounds');
        done();
      });
  });

  // URL/api/convert/?input=32g (invalid unit)
  test('32g (invalid unit)', (done) => {
    chai
      .request(server)
      .get('api/convert')
      .query({ input: '32g' })
      .end(function(err, res) {
        assert.equal(res, undefined);
        done();
      });
  });

  // URL/api/convert/?input=3/7.2/4kg (invalid number)
  test('3/7.2/4kg (invalid number)', (done) => {
    chai
      .request(server)
      .get('api/convert')
      .query({ input: '3/7.2/4kg' })
      .end(function(err, res) {
        assert.equal(res, undefined);
        done();
      });
  });

  // URL/api/convert/?input=3/7.2/4kilomegagram (invalid number and unit)
  test('3/7.2/4kilomegagram (invalid number and unit)', (done) => {
    chai
      .request(server)
      .get('api/convert')
      .query({ input: '3/7.2/4kilomegagram' })
      .end(function(err, res) {
        assert.equal(res, undefined);
        done();
      });
  });

});

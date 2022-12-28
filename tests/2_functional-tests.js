const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  // Timeout 5 seconds
  this.timeout(5000);

  // Test GET - URL/api/convert/?input=10L
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

  // Test GET - URL/api/convert/?input=32g (invalid unit name)
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

});

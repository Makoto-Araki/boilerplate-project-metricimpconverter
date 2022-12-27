const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  
  // Timeout 5 seconds
  this.timeout(5000);

  // Test GET - URL/api/convert/?input=10L
  test('GET URL/api/convert/?input=10L', function(done) {
    chai
    .request(server)
    .get('/api/convert/?input=10L')
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

  // Test GET - URL/api/convert/?input=3.1mi
  test('GET URL/api/convert/?input=3.1mi', function(done) {
    chai
    .request(server)
    .get('/api/convert/?input=3.1mi')
    .end(function(err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.type, 'application/json');
      assert.equal(res.body.initNum, 3.1);
      assert.equal(res.body.initUnit, 'mi');
      assert.equal(res.body.returnNum, 4.98895);
      assert.equal(res.body.returnUnit, 'km');
      assert.equal(res.body.string, '3.1 miles converts to 4.98895 kilometers');
      done();
    });
  });

  // Test GET - URL/hello
  test('GET URL/hello', function(done) {
    chai
    .request(server)
    .get('/hello')
    .end(function(err, res) {
      assert.equal(res.status, 200);
      assert.equal(res.text, 'Hello');
      done();
    });
  });

  // Test GET - URL/api/convert/?input=32g (invalid unit name)
  /*
  test('GET URL/api/convert/?input=32g (invalid unit name)', function(done) {
    chai
    .request(server)
    .get('api/convert/?input=32g')
    .end(function(err, res) {
      if (err) {
        console.log('AAA');
        console.dir(err);
      } else {
        console.log('BBB');
        console.dir(res);
      }
      assert.equal(res.status, 200);
      assert.equal(res.text, 'invalid unit');
      done();
    });
  });
  */
});

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  test('It should correctly read a whole number input', function() {
    assert.equal(convertHandler.getNum('3.1mi'), 3.1);
  });
  test('It should correctly read a decimal number input', function() {
    assert.equal(convertHandler.getNum('310mi'), 310);
  });
});
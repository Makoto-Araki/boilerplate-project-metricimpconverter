const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  
  // Function getNum Test
  suite('getNum', function() {
    test('It should correctly read a whole number input', function() {
      assert.equal(convertHandler.getNum('3.1mi'), 3.1);
    });
    test('It should correctly read a decimal number input', function() {
      assert.equal(convertHandler.getNum('3.1mi'), 3.1);
    });
    test('It should correctly read a fractional input', function() {
      assert.equal(convertHandler.getNum('3.1mi'), 3.1);
    });
    test('It should correctly read a fractional input with a decimal', function() {
      assert.equal(convertHandler.getNum('3.1mi'), 3.1);
    });
    test('It should correctly return an error on a double-fraction', function() {
      assert.equal(convertHandler.getNum('9/3/2mi'), 'invalid number and unit');
    });
    test('It should correctly default to a numerical input of when no numerical input is provided', function() {
      assert.equal(convertHandler.getNum('mi'), 1);
    });
  });

  // Function getUnit Test
  suite('getUnit', function() {
    test('It should correctly read each valid input unit', function() {
      assert.equal(convertHandler.getUnit('3.1mi'), 'mi');
    });
    test('It should correctly return an error for an invalid input unit', function() {
      assert.equal(convertHandler.getUnit('3.1mm'), 'invalid unit');
    });
  });

  // Function getReturnUnit Test
  suite('getReturnUnit', function() {
    test('It should return the correct return unit for each valid input unit', function() {
      assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    });
  });

  // Function spellOutUnit Test
  suite('spellOutUnit', function() {
    test('should correctly return the spelled-out string unit for each valid input unit', function() {
      assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
  });
});
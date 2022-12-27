const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {
  
  // getNum test
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

  // getUnit test
  suite('getUnit', function() {
    test('It should correctly read each valid input unit', function() {
      assert.equal(convertHandler.getUnit('3.1mi'), 'mi');
    });
    test('It should correctly return an error for an invalid input unit', function() {
      assert.equal(convertHandler.getUnit('3.1mm'), 'invalid unit');
    });
  });

  // getReturnUnit test
  suite('getReturnUnit', function() {
    test('It should return the correct return unit for each valid input unit', function() {
      assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    });
  });

  // spellOutUnit test
  suite('spellOutUnit', function() {
    test('It should correctly return the spelled-out string unit for each valid input unit', function() {
      assert.equal(convertHandler.spellOutUnit('mi'), 'miles');
    });
  });

  // convert test
  suite('convert', function() {
    test('It should correctly convert gal to L', function() {
      assert.equal(convertHandler.convert(3.1, 'gal'), 11.73477);
    });
    test('It should correctly convert L to gal', function() {
      assert.equal(convertHandler.convert(3.1, 'L'), 0.81893);
    });
    test('It should correctly convert mi to km', function() {
      assert.equal(convertHandler.convert(3.1, 'mi'), 4.98895);
    });
    test('It should correctly convert km to mi', function() {
      assert.equal(convertHandler.convert(3.1, 'km'), 1.92626);
    });
    test('It should correctly convert lbs to kg', function() {
      assert.equal(convertHandler.convert(3.1, 'lbs'), 1.40614);
    });
    test('It should correctly convert kg to lbs', function() {
      assert.equal(convertHandler.convert(3.1, 'kg'), 6.83434);
    });
  });
});
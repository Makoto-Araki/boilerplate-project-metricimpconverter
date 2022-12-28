'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  // Instance of my handmade functions
  let convertHandler = new ConvertHandler();

  // GET - URL/api/convert
  app.route('/api/convert').get((req, res) => {
    let initNum = convertHandler.getNum(req.query.input);
    let initUnit = convertHandler.getUnit(req.query.input);
    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      return res.send('invalid number and unit');
    } else if (initNum === 'invalid number') {
      return res.send('invalid number');
    } else if (initUnit === 'invalid unit') {
      return res.send('invalid unit');
    } else {
      return res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string,
      });
    }
  });

};

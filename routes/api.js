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

    if (initNum === 'invalid number and unit') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('invalid number and unit');
      res.end();
    } else if (initUnit === 'invalid unit') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('invalid unit');
      res.end();
    } else {
      res.json({
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: string,
      });
    }
  });

  // GET - URL/hello
  app.route('/hello').get((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello');
    res.end();
  });
  
};

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  // Instance of my handmade functions
  let convertHandler = new ConvertHandler();

  // GET - URL/api/convert
  app.route('/api/convert').get((req, res) => {
    console.log(`数値 : ${convertHandler.getNum(req.query.input)}`);
    console.log(`単位 : ${convertHandler.getUnit(req.query.input)}`);
  });
  
};

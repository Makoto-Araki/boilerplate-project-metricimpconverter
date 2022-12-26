function ConvertHandler() {
  
  // Regular expressions
  const reg1 = /[0-9.]+/;
  const reg2 = /km|mi|L|gal|lbs|kg/i;

  // Get number value from input(req.query.input)
  this.getNum = function(input) {
    let result = input.match(reg1);
    return Number(result[0]);
  };

  // Get unit name from input(req.query.input)
  this.getUnit = function(input) {
    let result = input.match(reg2);
    return result[0];
  };

  // Get the coresponding unit name from input(req.query.input)
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'L':
        result = 'gal';
        break;
      case 'gal':
        result = 'L';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
    }
    return result;
  };

  // Unit name is converted to full name
  this.spellOutUnit = function(unit) {
    let result;
    switch(unit) {
      case 'km':
        result = 'kilometers';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'L':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
    }
    return result;
  };

  // The input value is converted according to the input unit
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit) {
      case 'km':
        result = Number(initNum) / miToKm;
        break;
      case 'mi':
        result = Number(initNum) * miToKm;
        break;
      case 'L':
        result = Number(initNum) / galToL;
        break;
      case 'gal':
        result = Number(initNum) * galToL;
        break;
      case 'lbs':
        result = Number(initNum) * lbsToKg;
        break;
      case 'kg':
        result = Number(initNum) / lbsToKg;
        break;
    }
    return Math.round(result * 100000) / 100000;
  };

  // String property in return object
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;

function ConvertHandler() {
  
  // Regular expressions
  const reg1 = /[0-9.]+/;
  const reg2 = /km|mi|L|gal|lbs|kg/i;

  // Get number value from input(req.query.input)
  this.getNum = function(input) {
    let result = input.match(reg1);
    return result;
  };

  // Get unit name from input(req.query.input)
  this.getUnit = function(input) {
    let result = input.match(reg2);
    return result;
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

  // Unit name is unified to lower case
  this.spellOutUnit = function(unit) {
    let result = unit.toLowerCase();
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
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

function ConvertHandler() {
  
  // Regular expressions
  const reg1 = /[0-9.]+/;
  const reg2 = /km|mi|L|gal|lbs|kg/;

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

  this.spellOutUnit = function(unit) {
    let result;
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

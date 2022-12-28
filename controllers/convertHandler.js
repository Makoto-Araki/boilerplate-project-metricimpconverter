function ConvertHandler() {
  
  // Get number value from input(req.query.input)
  this.getNum = function(input) {
    let reg1 = /[0-9.]*\/[0-9.]*\/[0-9.]*/;
    let reg2 = /[0-9.]+/;
    let reg3 = /([0-9.]+)(\/)([0-9.]+)/;
    let temp;
    let result;
    if (reg1.test(input)) {
      result = 'invalid number'
    } else {
      if (reg2.test(input)) {
        try {
          if (reg3.test(input)) {
            temp = reg3.exec(input.match(reg3)[0]);
            result = Number(temp[1]) / Number(temp[3])
          } else {
            result = Number(input.match(reg2)[0]);
          }
        } catch {
          result = 'invalid number';
        }
      } else {
        result = Number(1);
      }
    }
    return result;
  };

  // Get unit name from input(req.query.input)
  this.getUnit = function(input) {
    let reg1 = /^([0-9.\/]*)(km|mi|L|gal|lbs|kg)$/i;
    let temp;
    let result;
    if (reg1.test(input)) {
      temp = reg1.exec(input);
      if (temp[2] === 'l' || temp[2] === 'L') {
        result = 'L';
      } else {
        result = temp[2].toLowerCase();
      }
    } else {
      result = 'invalid unit';
    }
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

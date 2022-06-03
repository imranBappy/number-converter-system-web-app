class Converter {
  constructor() {
    this.decimal = 0;
    this.binary = 0;
    this.octal = 0;
    this.hexadecimal = 0;
  }
  toDecimal(value, base) {
    value = `${value}`;
    let result = 0;
    for (let i = 0; i < value.length; i++) {
      let digit = value[i];
      result += digit * Math.pow(base, value.length - 1 - i);
    }
    return result;
  }
  decimalToAny(value) {
    this.decimal = value;
    this.binary = decimalConverter(value, 2);
    this.octal = decimalConverter(value, 8);
    this.hexadecimal = decimalConverter(value, 16);

    function decimalConverter(value, base) {
      let result = "";
      if (base === 16) {
        while (value > 0) {
          let digit = value % base;
          if (digit < 10) {
            result = digit + result;
          } else {
            switch (digit) {
              case 10:
                result = "A" + result;
                break;
              case 11:
                result = "B" + result;
                break;
              case 12:
                result = "C" + result;
                break;
              case 13:
                result = "D" + result;
                break;
              case 14:
                result = "E" + result;
                break;
              case 15:
                result = "F" + result;
                break;
              default:
                break;
            }
          }
          value = Math.floor(value / base);
        }
      } else {
        while (value > 0) {
          result = (value % base) + result;
          value = Math.floor(value / base);
        }
      }
      return result;
    }
  }
}

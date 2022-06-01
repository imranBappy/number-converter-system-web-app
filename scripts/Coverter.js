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
      while (value > 0) {
        result = (value % base) + result;
        value = Math.floor(value / base);
      }
      return result;
    }
  }
}

// let c = new Converter();
// c.decimalToAny(c.toDecimal(1010, 2));
// console.log(c);

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
    if (base == 16) {
      for (let i = 0; i < value.length; i++) {
        let digit = value[i];
        if (0 <= digit && digit <= 9) {
          result += digit * Math.pow(base, value.length - 1 - i);
        } else {
          switch (digit) {
            case "A":
              result += 10 * Math.pow(base, value.length - 1 - i);
              break;
            case "B":
              result += 11 * Math.pow(base, value.length - 1 - i);
              break;
            case "C":
              result += 12 * Math.pow(base, value.length - 1 - i);
              break;
            case "D":
              result += 13 * Math.pow(base, value.length - 1 - i);
              break;
            case "E":
              result += 14 * Math.pow(base, value.length - 1 - i);
              break;
            case "F":
              result += 15 * Math.pow(base, value.length - 1 - i);
              break;
            default:
              break;
          }
        }
      }
    } else {
      for (let i = 0; i < value.length; i++) {
        let digit = value[i];
        result += digit * Math.pow(base, value.length - 1 - i);
      }
    }
    return result;
  }

  decimalToAny(value) {
    this.decimal = value;
    this.binary = decimalConverter(value, 2);
    this.octal = decimalConverter(value, 8);
    this.hexadecimal = decimalConverter(value, 16);
    function remainderCal(value, base) {
      let result = "";
      let i = 15;
      while (value && i) {
        result = result + Math.trunc(value * base);
        value = Number(`0.${`${value * base}`.split(".")[1]}`);
        i--;
      }
      return result;
    }
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

class TextCNV {
  constructor() {
    this.text = "";
    this.binary = "";
  }
  toBinary(text) {
    let numCNV = new Converter();
    for (let i = 0; i < text.length; i++) {
      let code = text.charCodeAt(i);
      numCNV.decimalToAny(code);
      let len = numCNV.binary.length;
      if (numCNV.binary.length === 8) {
        this.binary = this.binary + numCNV.binary + " ";
      }
      let formateBit = numCNV.binary;
      while (len < 8) {
        formateBit = "0" + formateBit;
        len++;
      }
      this.binary = this.binary + formateBit + " ";
    }
  }
}

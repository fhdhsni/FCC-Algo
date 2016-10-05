/* https://www.freecodecamp.com/challenges/roman-numeral-converter */
/* eslint no-param-reassign: 0 */
function giveMeTheRomanOf(numberObj) {
  if (numberObj.num >= 1000) {
    numberObj.num -= 1000;

    return "M";
  } else if (numberObj.num >= 900) {
    numberObj.num -= 900;

    return "CM";
  } else if (numberObj.num >= 500) {
    numberObj.num -= 500;

    return "D";
  } else if (numberObj.num >= 400) {
    numberObj.num -= 400;

    return "CD";
  } else if (numberObj.num >= 100) {
    numberObj.num -= 100;

    return "C";
  } else if (numberObj.num >= 90) {
    numberObj.num -= 90;

    return "XC";
  } else if (numberObj.num >= 50) {
    numberObj.num -= 50;

    return "L";
  } else if (numberObj.num >= 40) {
    numberObj.num -= 40;

    return "XL";
  } else if (numberObj.num >= 10) {
    numberObj.num -= 10;

    return "X";
  } else if (numberObj.num >= 9) {
    numberObj.num -= 9;

    return "IX";
  } else if (numberObj.num >= 5) {
    numberObj.num -= 5;

    return "V";
  } else if (numberObj.num >= 4) {
    numberObj.num -= 4;

    return "IV";
  }
  numberObj.num -= 1;

  return "I";
}

module.exports = function convertToRoman(num) {
  const numObj = { num };
  const result = [];

  while (numObj.num !== 0) {
    result.push(giveMeTheRomanOf(numObj));
  }

  return result.join("");
};

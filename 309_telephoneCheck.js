// https://www.freecodecamp.com/challenges/validate-us-telephone-numbers
module.exports = function telephoneCheck(str) {
  const regexp = /^1?\s?(?:(?:\(\d{3}\))|(?:\d{3}))\s?-?\d{3}\s?-?\d{4}$/;

  return regexp.test(str);
};

// https://www.freecodecamp.com/challenges/search-and-replace
module.exports = function myReplace(str, before, after) {
  const beforeArr = before.split("");
  const afterArr = after.split("");
  const firstLetterIsUpperCase = beforeArr[0].charCodeAt(0) >= 65 &&
        beforeArr[0].charCodeAt(0) <= 90;

  if (firstLetterIsUpperCase) {
    afterArr[0] = afterArr[0].toUpperCase();
  }
  const newStr = str.replace(before, afterArr.join(""));

  return newStr;
};

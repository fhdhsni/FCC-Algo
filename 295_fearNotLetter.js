module.exports = function fearNotLetter(str) {
  const strArray = str.split("");
  const firstLetterCharCode = strArray[0].charCodeAt(0);
  const lastLetterCharCode = strArray[strArray.length - 1].charCodeAt(0);

  for (let i = firstLetterCharCode; i <= lastLetterCharCode; i += 1) {
    if (strArray.indexOf(String.fromCharCode(i)) === -1) {
      return String.fromCharCode(i);
    }
  }

  return undefined;
};

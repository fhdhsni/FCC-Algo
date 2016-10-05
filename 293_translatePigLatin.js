function isItAVowel(string, letterIndex) {
  const vowels = ["A", "E", "I", "O", "U"];
  const desiredLetted = string.substr(letterIndex, 1).toUpperCase();

  for (let i = 0; i < vowels.length; i += 1) {
    if (desiredLetted === vowels[i]) {
      return true;
    }
  }

  return false;
}

module.exports = function translatePigLatin(str) {
  const itBeginsWithAVowel = isItAVowel(str, 0);

  if (itBeginsWithAVowel) {
    return str.concat("way");
  }
  const strArr = str.split("");
  const itsAConsonantCluster = !isItAVowel(str, 1); // ! negation

  if (itsAConsonantCluster) {
    strArr.push(strArr.shift(), strArr.shift());
  } else {
    strArr.push(strArr.shift());
  }
  strArr.push("ay");

  return strArr.join("");
};

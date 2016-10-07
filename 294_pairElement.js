function giveMePairOf(char) {
  if (char === "A") {
    return "T";
  } else if (char === "T") {
    return "A";
  } else if (char === "C") {
    return "G";
  }

  return "C";
}

module.exports = function pairElement(str) {
  const result = [];

  str.split("").forEach((char) => {
    const pair = [char];

    pair.push(giveMePairOf(char));
    result.push(pair);
  });

  return result;
};

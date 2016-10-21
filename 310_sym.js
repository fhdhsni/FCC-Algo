function symDifOfTWoArray(array1, array2) {
  const result = [];

  array1.forEach((el) => {
    if (array2.indexOf(el) === -1) {
      result.push(el);
    }
  });

  array2.forEach((el) => {
    if (array1.indexOf(el) === -1 && result.indexOf(el) === -1) {
      result.push(el);
    }
  });

  return result;
}

module.exports = function sym(...arrays) {
  const result = arrays
        .reduce((resultArray, currentArray) => symDifOfTWoArray(resultArray, currentArray), []);

  return result;
};

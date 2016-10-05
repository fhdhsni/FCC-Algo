/* https://www.freecodecamp.com/challenges/diff-two-arrays */

module.exports = function diffArray(arr1, arr2) {
  const result = [];

  arr1.forEach((e) => {
    if (arr2.indexOf(e) === -1) {
      result.push(e);
    }
  });

  arr2.forEach((e) => {
    if (arr1.indexOf(e) === -1) {
      result.push(e);
    }
  });

  return result;
};

// Another nicer solution could be: curtesy of @Blauelf
// function diffArray(arr1, arr2) {
//   return arr1.concat(arr2).filter((e) => arr1.indexOf(e) === -1 || arr2.indexOf(e) === -1);
// }

// https://www.freecodecamp.com/challenges/sorted-union
module.exports = function uniteUnique(...arr) {
  const result = [];

  arr.forEach((e) => {
    e.forEach((innerElement) => {
      if (result.indexOf(innerElement) === -1) {
        result.push(innerElement);
      }
    });
  });

  return result;
};

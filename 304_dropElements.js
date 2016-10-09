// https://www.freecodecamp.com/challenges/drop-it
module.exports = function dropElements(arr, func) {
  const length = arr.length;

  for (let i = 0; i < length; i += 1) {
    if (func(arr[0])) {
      return arr;
    }
    arr.shift();
  }

  return arr;
};

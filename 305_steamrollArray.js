module.exports = function steamrollArray(arr, accumulator = []) {
  if (Array.isArray(arr)) {
    arr.forEach(e => steamrollArray(e, accumulator));
  } else {
    accumulator.push(arr);
  }

  return accumulator;
};

/* https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range */

module.exports = function sumAll(arr) {
  const min = Math.min(arr[0], arr[1]);
  const max = Math.max(arr[0], arr[1]);
  let sum = 0;

  for (let i = min; i <= max; i += 1) {
    sum += i;
  }

  return sum;
};

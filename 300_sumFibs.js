// https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers
function oddFibUntil(num) {
  let preLast = 0;
  let last = 1;
  const result = [];

  while (last <= num) {
    if (last % 2 !== 0) {
      result.push(last);
    }
    const temp = last;

    last += preLast;
    preLast = temp;
  }

  return result;
}

module.exports = function sumFibs(num) {
  const oddFibArray = oddFibUntil(num);
  const sumOfOddFib = oddFibArray.reduce((sum, current) => sum + current, 0);

  return sumOfOddFib;
};

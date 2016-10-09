// https://www.freecodecamp.com/challenges/sum-all-primes
function isPrime(number) {
  let flag = true;
  let divisor = 2;

  if (number < 2) {
    return false;
  }
  while (flag === true && divisor < number) {
    if (number % divisor === 0) {
      flag = false;
    }
    divisor += 1;
  }

  return flag;
}

module.exports = function sumPrimes(num) {
  let currentNumber = 2;
  let sum = 0;

  while (currentNumber <= num) {
    if (isPrime(currentNumber)) {
      sum += currentNumber;
    }

    currentNumber += 1;
  }

  return sum;
};

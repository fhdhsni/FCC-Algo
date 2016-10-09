// https://www.freecodecamp.com/challenges/arguments-optional
module.exports = function addTogether(...args) {
  const okay = !args.some(arg => { // negation is intended
    if (typeof arg === "number") {
      return false;
    }

    return true;              // so it's not a number
  });

  if (okay) {
    if (args.length >= 2) {
      let sum = 0;

      args.forEach(arg => {
        sum += arg;
      });

      return sum;
    }                           // end of if (args.length >= 2)

    return function enjoyClosure(num) {
      if (typeof num !== "number") {
        return undefined;
      }

      return args[0] + num;
    };
  }                             // end of if (okay)

  return undefined;             // one of arguments wasn't a number;
};

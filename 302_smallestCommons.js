// https://www.freecodecamp.com/challenges/smallest-common-multiple
/* eslint no-constant-condition: 0 */

module.exports = function smallestCommons(arr) {
  const smallerNum = Math.min(arr[0], arr[1]);
  const biggerNumber = Math.max(arr[0], arr[1]);

  for (let i = 1; true; i += 1) { // hopefully we gonna return something.
    const result = smallerNum * i;

    if (result % biggerNumber === 0) {
      // Okay, so far we have Least Common Multiple of arr[0] and arr[1]
      let flag = true;

      for (let k = smallerNum + 1; k < biggerNumber && flag === true; k += 1) {
        if (result % k !== 0) {
          flag = false;         // get outta here, "result" is not our answer.
        }
      }
      if (flag) {
        return result;
      }
    }
  }
};

// https://www.freecodecamp.com/challenges/finders-keepers

module.exports = function findElement(arr, func) {
  let result;

  arr.some(e => {               // once `some` got a truthy value it returns
    if (func(e)) {
      result = e;

      return true;
    }

    return false;
  });

  return result;
};

/* Using filter is easier but depending on length of `arr` it does more than we need.

module.exports = function findElement(arr, func) {
  const result = arr.filter(e => func(e));

  return result[0];
};
*/

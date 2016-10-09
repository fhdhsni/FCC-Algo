// https://www.freecodecamp.com/challenges/everything-be-true
module.exports = function truthCheck(collection, pre) {
  let result = true;

  collection.some(obj => {
    if (Boolean(obj[pre])) {
      // If obj[pre] was truthy keep checking other objs until you find a falsy
      return false;
    }
    result = false;

    return true; // so you found a falsy obj[pre]. Okay, we're done. no more check is needed;
  });

  return result;
};

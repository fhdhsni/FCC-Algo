// https://www.freecodecamp.com/challenges/wherefore-art-thou
module.exports = function whatIsInAName(collection, source) {
  const arr = [];

  collection.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      let flag = true;

      if (obj[key] === source[key]) { // so it's a potential obj but further checks are needed.
        Object.keys(source).forEach((sourceKey) => {
          // Let's go the other way, checking keys of source to see if they are exist in obj
          if (source[sourceKey] !== obj[sourceKey] || arr.indexOf(obj) !== -1) {
            // arr.indexOf(obj) !== -1 is there to check if the obj is already added or not.
            flag = false;
          }
        });
        if (flag) {
          arr.push(obj);
        }
      }
    });
  });

  return arr;
};

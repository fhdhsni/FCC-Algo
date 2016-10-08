// https://www.freecodecamp.com/challenges/spinal-tap-case
module.exports = function spinalCase(str) {
  let result = str.replace(/\s*[A-Z]/g, (match) => `-${match.trim()}`);

  result = result.replace(/\s/g, "-");
  result = result.replace(/_|^-/g, "");

  return result.toLowerCase();
};

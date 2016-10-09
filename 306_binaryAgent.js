// https://www.freecodecamp.com/challenges/binary-agents
module.exports = function binaryAgent(str) {
  return str.split(" ")
        .map(e => Number.parseInt(e, 2))
        .map(e => String.fromCharCode(e))
        .join("");
};

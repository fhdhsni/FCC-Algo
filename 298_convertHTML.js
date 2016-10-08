// https://www.freecodecamp.com/challenges/convert-html-entities
module.exports = function convertHTML(str) {
  let result = "";

  result = str.replace(/&/g, "&amp;");
  result = result.replace(/"/g, "&quot;");
  result = result.replace(/</g, "&lt;");
  result = result.replace(/>/g, "&gt;");
  result = result.replace(/'/g, "&apos;");

  return result;
};

const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.flatMap(i => i).forEach(i => {
    if (i === '^^') {
      cats++;
    }
  });
  return cats;
};

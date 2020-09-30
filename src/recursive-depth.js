const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    arr.forEach(el => {
      let depth = 1;
      if (Array.isArray(el)) { depth += this.calculateDepth(el); }
      maxDepth = Math.max(maxDepth, depth);
    });
    return maxDepth;
  }
};
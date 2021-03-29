const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  max = 1;
   calculateDepth(arr, depth = 0) {
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
        return this.calculateDepth(arr[i], depth + 1);
      }
    }
    return depth + 1;
  }
 };


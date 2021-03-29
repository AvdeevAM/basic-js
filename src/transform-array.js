const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = new Array();
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  res = [...arr];
  for (var i = 0; i < res.length; i++) {
    if (res[i] == "--discard-next") {
      res[i + 1] = "removed";
      res.splice(i, 1);
      i--;
    }
    if (res[i] == "--discard-prev") {
      if (res[i - 1] != "removed") {
        if (i == 0) {
          res.splice(0, 1);
        } else {
          res[i - 1] = "removed";
          res.splice(i, 1);
        }
        i--;
      } else {
        res.splice(i, 1);
      }
    }
    if (res[i] == "--double-next") {
      if (i == res.length - 1){
        res.splice(i, 1);
      } else res[i] = res[i + 1];
    }
    if (res[i] == "--double-prev") {
      if (res[i - 1] != "removed") {
        if (i >= 1) {
          res[i] = res[i - 1];
        } else {
          res.splice(0, 1);
        }
      } else {
        res.splice(i, 1);
      }
    }
  }
  for (var i = 0; i < res.length; i++) {
    if (res[i] == "removed") {
      res.splice(i, 1);
      i--;
    }
  }
  return res;
};

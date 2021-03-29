const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator == undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes == undefined){
    options.repeatTimes = 1;
  }
  // if (options.additionRepeatTimes == undefined){
  //   options.additionRepeatTimes = 1;
  // }
  let res = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    res += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      res += options.addition;
      res += options.additionSeparator.toString();
    }
    if (options.additionRepeatTimes > 0) {
      res = res.slice(
        0,
        res.length - options.additionSeparator.toString().length
      );
    }
    res += options.separator.toString();
  }
  res = res.slice(0, res.length - options.separator.toString().length);
  return res;
};

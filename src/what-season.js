const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date != "object" || date == null){
    throw new Error();
  }
  if (!date){
    return "Unable to determine the time of year!";
  }
  let month = date.getMonth();
  switch (month){
    case 0,1,11:
      return "winter";
    case 2,3,4:
      return "spring";
    case 5,6,7:
      return "summer";
    case 8,9,10:
      return "fall";
  }
};

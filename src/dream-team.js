const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = "";
  if ((typeof members != "object") || (!members)){ 
    return false;
  }
  for (var i = 0; i < members.length; i++){
    if (typeof members[i] == "string"){
      result += members[i].trim().charAt(0);
    }
  }
  return result.toString().toUpperCase().split("").sort().join("");
};

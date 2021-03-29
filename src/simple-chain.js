const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.match(/( .+ )/);
  },
  addLink(value) {
   return this + "~~( ${value} )";
  },
  removeLink(position) {
    let regex = /( .+ )/;
    let res = regex.exec(this);
    let toRemove = res[position - 1];
    this.replace(toRemove, "");
    let newStr = this;
    for (var i = 0; i < newStr.length; i++){
      if (newStr.charAt(i) == "~" && newStr.charAt(i + 1) == "~" && newStr.charAt(i + 2) == "~"){
        newStr = newStr.slice(0, i) + newStr.slice(i + 4);
      }
    }
    if (newStr.charAt(newStr.length - 1) == '~'){
      newStr = newStr.slice(0, newStr.length - 2);
    }
    if (newStr.charAt(0) == '~'){
      newStr = newStr.slice(2);
    }
    return newStr;
},
  reverseChain() {
    let regex = /( .+ )/;
    let newStr = "";
    let res = regex.exec(this);
    for (var i = res.length - 1; i >= 0; i--){
      newStr += res[i] + "~~";
    }
    newStr.slice(0, newStr.length - 2);
  },
  finishChain() {
    return this;
  }
};

module.exports = chainMaker;

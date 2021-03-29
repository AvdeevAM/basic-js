const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction){
    if (direction === undefined){
      this.isDirect = true;
    } else {
    this.isDirect = direction;
    }
  }

  encrypt(messageStr, keyStr) {
    let cypher = "";
    let msg = messageStr.toUpperCase().split("");
    let key = keyStr.split("");
    for (let i = 0, j = 0; i < msg.length; i++) {
      let currentLetter = msg[i];
      if (
        currentLetter.charCodeAt() >= 65 &&
        currentLetter.charCodeAt() <= 90
      ) {
        let cryptedLetter = (currentLetter.charCodeAt() - 65 + (key[j % key.length].toUpperCase().charCodeAt() - 65)) % 26;
        cypher += String.fromCharCode(cryptedLetter + 65);
        j++;
      } else cypher += currentLetter;
    }
    if (this.isDirect == true){
    return cypher;
    } else return cypher.split('').reverse().join('');
  }

  decrypt(cypherStr, keyStr) {
    let cypher = cypherStr.toUpperCase().split("");
    let key = keyStr.split("");
    let msg = "";
    for (let i = 0, j = 0; i < cypher.length; i++) {
      let currentLetter = cypher[i];
      if (
        currentLetter.charCodeAt() >= 65 &&
        currentLetter.charCodeAt() <= 90
      ) {
        let decryptedLetter = (26 - ((key[j % key.length].toUpperCase().charCodeAt() - 65) - (currentLetter.charCodeAt() - 65))) % 26;
        msg += String.fromCharCode(decryptedLetter + 65);
        j++;
      } else msg += currentLetter;
    }
    if (this.isDirect == true){
    return msg;
    } else return msg.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

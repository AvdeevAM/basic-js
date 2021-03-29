const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
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
    return cypher;
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
        // let decryptedLetter =
        //   (currentLetter.charCodeAt() -
        //     65 +
        //     (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
        //   26;
        msg += String.fromCharCode(decryptedLetter + 65);
        j++;
      } else msg += currentLetter;
    }
    return msg;
  }
}

module.exports = VigenereCipheringMachine;

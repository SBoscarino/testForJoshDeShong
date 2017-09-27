
function phoneNumber(string) {
  let str = string.replace(/[^0-9]/g, "");
  if (str === '') {
    return null;
  }
  if (str.length === 10) {
    return "+1" + str;
  }
  else if (str.length === 11) {
    if (str[0] === "1"){
      return "+" + str;
    } else {
      return null;
    }
  }
  else if (str.length <= 9) {
    return null;
  }
  else if (str.length === 14){
    for(let j = 0; j < str.length; j++) {
      let stringTwo = str.substring(0, 10);
      return "+1" + stringTwo + ";ext" + str.substring(10, 14);
    }
  }
  else if (str.length === 13){
    for(let j = 0; j < str.length; j++) {
      let stringTwo = str.substring(0, 10);
      return "+1" + stringTwo + ";ext" + str.substring(10, 13);
    }

  }
}



module.exports = phoneNumber;

var generateBtn = document.querySelector("#generate");

// Lowercase Array
let lCaseValues = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Uppercase Array
let uCaseValues = [];
for (let i = 0; i < lCaseValues.length; i++) {
    uCaseValues[i] = lCaseValues[i].toUpperCase();    
}

// Special Character Array
let sCharValues = ["\"","\\"," ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

// Numberical Character Array
let numCharValues = ["0","1","2","3","4","5","6","7","8","9"];

// Combined array that includes each of the specific character set arrays
let allValues = [lCaseValues, uCaseValues, sCharValues, numCharValues];
console.log(allValues);
console.log(allValues[0]);
console.log(allValues[1]);

function generatePassword(){










    
    return "test";  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
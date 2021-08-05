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

// Empty arrays to be used in the function
let passOptions = [];

function generatePassword(){ 
    
    // Establishing password length
    let passLength = prompt("How many characters would you like your password to be?\n(Must be between 8 and 128 characters)");
    console.log(passLength);

    if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 and 128 characters!");
        return "Please click Generate Password again!";
    }

    // Determining what characters the user wants to include
    let lCase = confirm("Click OK if you would like to include lowercase characters.");
    console.log(lCase);
    let uCase = confirm("Click OK if you would like to include uppercase characters.");
    console.log(uCase);
    let sChars = confirm("Click OK if you would like to include special characters.");
    console.log(sChars);
    let numChars = confirm("Click OK if you would like to include numerical characters.");
    console.log(numChars);

    // Converting the user inputs into an array of booleans
    answerArray = [lCase, uCase, sChars, numChars];
    console.log(answerArray);

    // Using the combined array and user input array to establish the array of allowable password characters to pull from
    if (lCase === false && uCase === false && sChars === false && numChars === false) {
        alert("Please select at least one option!");
        return "Please click Generate Password again!";
    }
    else {
        for (let i = 0; i < answerArray.length; i++) {
            if (answerArray[i] == true) {
                passOptions = [...passOptions, ...allValues[i]];
                console.log(passOptions);
            }
        }
    }   
    
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
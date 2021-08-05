//Estasblishes the variable for the Generate Password button
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

// Empty arrays to be used in the function
let passOptions = [];
let generatedPass = [];
let generatedPassArray = [];

// Main function that prompts the user for their password parameters and then generates the password randomly from the available characters
function generatePassword(){ 
    
    // Establishing password length
    let passLength = prompt("How many characters would you like your password to be?\n(Must be between 8 and 128 characters.)");

    if (passLength < 8 || passLength > 128) {
        alert("Password must be between 8 and 128 characters!");
        return "Please click Generate Password again!";
    }

    // Determining what characters the user wants to include
    let lCase = confirm("Click OK if you would like to include lowercase characters.");
    let uCase = confirm("Click OK if you would like to include uppercase characters.");
    let sChars = confirm("Click OK if you would like to include special characters.");
    let numChars = confirm("Click OK if you would like to include numerical characters.");

    // Converting the user inputs into an array of booleans
    answerArray = [lCase, uCase, sChars, numChars];

    // Using the combined array and user input array to establish the array of allowable password characters to pull from
    if (lCase === false && uCase === false && sChars === false && numChars === false) {
        alert("Please select at least one option!");
        return "Please click Generate Password again!";
    }
    else {
        for (let i = 0; i < answerArray.length; i++) {
            if (answerArray[i] == true) {
                passOptions = [...passOptions, ...allValues[i]];
            }
        }
    }   
    
    // Generating the password array
    for (let i = 0; i < passLength; i++) {
        const ranNum = Math.floor(Math.random()*passOptions.length);
        generatedPassArray.push(passOptions[ranNum]);        
    }

    // Converting the password array into a string to be returned 
    generatedPass = generatedPassArray.join("");
    return generatedPass;  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
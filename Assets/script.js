// Assignment Code
var generateBtn = document.querySelector("#generate");
var possibleChars = [];
var passwordArray = [];
var specialChar = [];
var numericNum = [];
var lowerChar = [];
var upperChar = [];
var numChars = [];
var specialChars = Boolean;
var numericNums = Boolean;
var lowerChars = Boolean;
var upperChars = Boolean;
console.log(specialChar);
for (let i = 32; i < 48; i++) {
  specialChar.push(String.fromCharCode(i));
}
for (let i = 58; i < 65; i++) {
  specialChar.push(String.fromCharCode(i));
}
for (let i = 91; i < 97; i++) {
  specialChar.push(String.fromCharCode(i));
}
for (let i = 123; i < 127; i++) {
  specialChar.push(String.fromCharCode(i));
}

for (let i = 48; i < 58; i++) {
  numericNum.push(String.fromCharCode(i));
}

for (let i = 97; i < 123; i++) {
  lowerChar.push(String.fromCharCode(i));
}

for (let i = 65; i < 91; i++) {
  upperChar.push(String.fromCharCode(i));
}
function start() {
  numChars = prompt(
    "How many characters would you like in your password? (Please enter number between 8-128)",
    "8"
  );
  if (numChars < 8 || numChars > 128) {
    alert("Please enter an effective number");
    return start();
  } else charSelections();
}

function charSelections() {
  var specialChars = confirm("Would you like special characters");
  var numericNums = confirm("Would you like numbers");
  var lowerChars = confirm("Would you like lower cases");
  var upperChars = confirm("Would you like upper cases");

  if (!specialChars && !numericNums && !lowerChars && !upperChars) {
    alert("Please select at least one option.");
    return charSelections();
  } else {
    if (specialChars) {
      possibleChars.push(...specialChar);
    }
    if (numericNums) {
      possibleChars.push(...numericNum);
    }
    if (lowerChars) {
      possibleChars.push(...lowerChar);
    }
    if (upperChars) {
      possibleChars.push(...upperChar);
    }
  }
  passwordGenerate();
}

function passwordGenerate() {
  for (let i = 0; i <= numChars - 1; i++) {
    passwordArray[i] =
      possibleChars[Math.floor(Math.random() * possibleChars.length)];
  }
}
// Write password to the #password input
function writePassword() {
  var password = passwordArray.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

start();

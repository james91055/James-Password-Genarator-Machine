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
var possibleCharsA = possibleCharsA.concat(
  possibleChars[0],
  possibleChars[1],
  possibleChars[2],
  possibleChars[3]
);

for (let i = 33; i < 48; i++) {
  specialChar.push(String.fromCharCode(i));
}
for (let i = 58; i < 65; i++) {
  specialChar.push(String.fromCharCode(i));
}
for (let i = 91; i < 96; i++) {
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
  var numChars = prompt(
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
      possibleChars.push(specialChar);
    }
    if (numericNums) {
      possibleChars.push(numericNum);
    }
    if (lowerChars) {
      possibleChars.push(lowerChar);
    }
    if (upperChars) {
      possibleChars.push(upperChar);
      console.log(possibleChars);
    }
  }
  passwordGenerate();
}

function passwordGenerate() {
  for (let i = 0; i < numChars; i++) {
    passwordArray[i] = Math.floor(Math.random() * possibleChars);
  }
  console.log(possibleCharsA);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

start();

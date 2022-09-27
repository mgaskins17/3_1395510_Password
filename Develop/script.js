// Assignment Code
var generateBtn = document.querySelector("#generate");

// Will create an array that contains what the password should be composed of
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// There is a way to use the character codes in javascript to create an array of upper case letters - will do later just hard code for now
var upperalphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var loweralphabet = upperalphabet.map(upperalphabet => upperalphabet.toLowerCase()); // Learn how the map function works

// symbols \ not working
var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/" ];

// Console log to verify arrays are working and everything is showing up
console.log(number);
console.log(upperalphabet);
console.log(loweralphabet);
console.log(symbols);


// bringing in interaction from generate password button
//function promptMe () {
  // passwordlength = window.prompt("Please enter how many characters you want your password:",);
// }

// need to have interaction from the generate password button before asking
// var passwordlength = window.prompt("Please enter how many characters you want your password:",);
// passwordlength = Number(passwordlength);

// while loop checking password length, and keep interating to use that they need to choose a password with length between 8 - 128
// while (passwordlength < 8 || passwordlength > 128) {
  // passwordlength = window.prompt("Please choose a password between 8 - 128 characters:");
// }

// initializing variables used in generate password
var passwordlength = [];
var mypassword = [];
var arrayselect = [];
var randomvalue = [];
var passchar = "";

// function of choosing a random value between min to max which symbolize each of the 4 arrays containing values
function arrayrandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min) + min);
}

function generatepassword() {

  // original input for password length
  passwordlength = window.prompt("Please enter how many characters you want your password:",);
  // while loop to maintain 
  while (passwordlength < 8 || passwordlength > 128) {
    passwordlength = window.prompt("Please choose a password between 8 - 128 characters:");
  }

  // using a for loop to build the password
  // how do want to to randomize it? use 1-4 each literation to pick an array then use the length of each array then radomize a value for a character in that array
  for (let i = 0; i < passwordlength; i++) {
    arrayselect = arrayrandom(1,4); // hardcoding 1 to 4 as values to symbolize the arrays

      // this nested if is to use the random value from 1-4 to select it will picks it symbol from
      if (arrayselect === 1) {
        randomvalue = arrayrandom(0,number.length-1);
        passchar += number[randomvalue];
      } else if (arrayselect === 2) {
        randomvalue = arrayrandom(0,upperalphabet.length-1);
        passchar += upperalphabet[randomvalue];
      } else if (arrayselect === 3) {
        randomvalue = arrayrandom(0,loweralphabet.length-1);
        passchar += loweralphabet[randomvalue];
      } else if (arrayselect === 4) {
        randomvalue = arrayrandom(0,symbols.length-1);
        passchar += symbols[randomvalue];
      } 
  }

  // The return function states that the output of function generatepassword is this
  return passchar;
}


// Write password to the #password input
function writePassword() {

  // var password = generatepassword();
  var password = generatepassword();

  // using console logs to ensure generatepassword function is working
  console.log(passwordlength);
  console.log(mypassword);
  console.log(arrayselect);
  console.log(randomvalue);
  console.log(passchar);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



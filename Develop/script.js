// Assignment Code
var generateBtn = document.querySelector("#generate");

// Will create an array that contains what the password should be composed of
var NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; // replace variable name to NUMBERS

// There is a way to use the character codes in javascript to create an array of upper case letters - will do later just hard code for now
var UPPERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var LOWERS = UPPERS.map(upperalphabet => upperalphabet.toLowerCase()); // Learn how the map function works

// symbols \ not working
var SYMBOLS = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", '"', "<", ">", ",", ".", "?", "/" ];

// Console log to verify arrays are working and everything is showing up
console.log(NUMBERS);
console.log(UPPERS);
console.log(LOWERS);
console.log(SYMBOLS);


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
var arrayselect = [];
var randomvalue = [];
var passchar = ""; // this isn't an array, we're building out a string instead of an array
var randplace = 0;
var counter = 0;





// function of choosing a random value between min to max which symbolize each of the 4 arrays containing values
function arrayrandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1) + min); // is inclusive of min and max because Math.random can be 0 but never 1 - returns a decimal between 0 and 1
}

// BUILDING OUT PASSWORD FUNCTION
function generatepassword() {

  passchar = "";
  crione = 0;
  critwo = 0;
  crithr = 0;
  crifour = 0;
  // confirming criteria for the password using booleans
  var usenum = confirm("Would you like to use numbers in the password?");
  var useupper = confirm("Would you like to use uppercase letters?");
  var uselower = confirm("Would you like to use lowercase letters?");
  var usesymb = confirm("Would you like to use symbols?");

  // original input for password length
  passwordlength = window.prompt("Please enter how many characters you want your password:",);
  // while loop to maintain 
  while (passwordlength < 8 || passwordlength > 128) {
    passwordlength = window.prompt("Please choose a password between 8 - 128 characters:");
  }

  // build a starter set for passchar which contains at least each of the selected criteria
  if (usenum == true) {
        randomvalue = arrayrandom(0,NUMBERS.length-1);
        passchar += NUMBERS[randomvalue];
        //counter = counter + 1;
        counter++;
  }
  if (useupper == true) {
        randomvalue = arrayrandom(0,NUMBERS.length-1);
        passchar += UPPERS[randomvalue];
        counter++;
  }
  if (uselower == true) {
        randomvalue = arrayrandom(0,NUMBERS.length-1);
        passchar += LOWERS[randomvalue];
        counter++;
  }
  if (usesymb == true) {
        randomvalue = arrayrandom(0,NUMBERS.length-1);
        passchar += SYMBOLS[randomvalue];
        counter++;
  }

  // using a for loop to build the password
  // use 1-4 each literation to pick an array then use the length of each array then radomize a value for a character in that array
  for (let i = 0; i < (passwordlength-counter); i++) {
    arrayselect[i] = arrayrandom(1,4); // hardcoding 1 to 4 as values to symbolize the arrays 
    
      // this nested if is to use the random value from 1-4 to select it will picks it symbol from
      // stricter criteria
      if (arrayselect[i] === 1 && usenum === true) {
        randomvalue = arrayrandom(0,NUMBERS.length-1);
        passchar += NUMBERS[randomvalue];
      } else if (arrayselect[i] === 2 && useupper === true) {
        randomvalue = arrayrandom(0,UPPERS.length-1);
        passchar += UPPERS[randomvalue];
      } else if (arrayselect[i] === 3 && uselower === true) {
        randomvalue = arrayrandom(0,LOWERS.length-1);
        passchar += LOWERS[randomvalue];
      } else if (arrayselect[i] === 4 && usesymb === true) {
        randomvalue = arrayrandom(0,SYMBOLS.length-1);
        passchar += SYMBOLS[randomvalue];
      } else {
        i = i - 1;
      } 

  }

  // hashing the password to scramble it - just make the password more secure
  


  // The return function states that the output of function generatepassword is this
  return passchar;
}



// Write password to the #password input
function writePassword() {

  // var password = generatepassword();
  var password = generatepassword();

  // using console logs to ensure generatepassword function is working
  console.log(passwordlength);
  console.log(arrayselect);
  console.log(randomvalue);
  console.log(passchar);
  console.log(counter);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



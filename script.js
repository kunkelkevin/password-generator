// Initialize Global variables and all accessible characters for a password

var passwordType = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numeric: "0123456789",
  special: " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"',
  chosen: "",
};
passwordType.uppercase = passwordType.lowercase.toUpperCase();
var passwordLength = 0;
var newPassword = "";
var skipLengthChoice = false;

// Function to choose what types of characters are wanted in the password

var choosePasswordType = function () {
  if (!skipLengthChoice){
  choosePasswordLength();
  }
  skipLengthChoice = false;
  passwordType.chosen = "";
  newPassword = "";
  validation = "";
  remainingPasswordLength = passwordLength;
  wantLowercase = window.confirm(
    "Do you want lowercase letters in your password?"
  );
  wantUppercase = window.confirm(
    "Do you want uppercase letters in your password?"
  );
  wantNumeric = window.confirm("Do you want numbers in your password?");
  wantSpecial = window.confirm(
    "Do you want special characters in your password?"
  );
  //check to ensure at least one password type was chosen
  if (!wantLowercase && !wantUppercase && !wantSpecial && !wantNumeric) {
    window.alert(
      "Please choose at least one type (Lowercase, Uppercase, Numeric, Special) so a password can be generated."
    );
    skipLengthChoice = true;
    return choosePasswordType();
  }
  // Conditional statements to add the chosen password types to the "chosen" string.  Will also add one of that character
  // type to newPassword to ensure every chosen character type is part of the displayed password.
  if (wantLowercase) {
    passwordType.chosen += passwordType.lowercase;
    validation += "Lowercase letters \n";
    remainingPasswordLength--;
    newPassword +=
      passwordType.lowercase[
        Math.floor(Math.random() * passwordType.lowercase.length)
      ];
  }
  if (wantUppercase) {
    passwordType.chosen += passwordType.uppercase;
    validation += "Uppercase letters \n";
    remainingPasswordLength--;
    newPassword +=
      passwordType.uppercase[
        Math.floor(Math.random() * passwordType.uppercase.length)
      ];
  }
  if (wantNumeric) {
    passwordType.chosen += passwordType.numeric;
    validation += "Numbers \n";
    remainingPasswordLength--;
    newPassword +=
      passwordType.numeric[
        Math.floor(Math.random() * passwordType.numeric.length)
      ];
  }
  if (wantSpecial) {
    passwordType.chosen += passwordType.special;
    validation += "Special characters \n";
    remainingPasswordLength--;
    newPassword +=
      passwordType.special[
        Math.floor(Math.random() * passwordType.special.length)
      ];
  }
  // Validation of chosen parameters
  if (!window.confirm("Do you want an " + passwordLength + " character password containing the following characters: \n\n" + validation)){
    skipLengthChoice=false;
    return choosePasswordType();
  } else {
    passwordLength=remainingPasswordLength;
  }
};

// Function to get user input for desired password length with check to ensure it is between 8 and 120

var choosePasswordLength = function () {
  passwordLength = window.prompt(
    "Please choose the length of you password between 8 and 120 characters."
  );
  if (passwordLength < 8 || passwordLength > 120) {
    window.alert("That is not a valid response");
    choosePasswordLength();
  }
};

// Function that goes through each letter in password and swaps with another random letter in the password

var scrambler = function(){
  newPassword = newPassword.split("");
  for (i=0; i<newPassword.length; i++){
    var randomSpot = Math.floor(Math.random()*newPassword.length);
    var temp = newPassword[i];
    newPassword[i]=newPassword[randomSpot];
    newPassword[randomSpot]=temp;
  }
  newPassword = newPassword.join("");
}

// Main function used to create password

var generatePassword = function () {
  choosePasswordType();
  for (var i = 1; i <= passwordLength; i++) {
    newPassword +=
      passwordType.chosen[
        Math.floor(Math.random() * passwordType.chosen.length)
      ];
  }
  // Since the first 1-4 character are already assigned a specific chosen character type, scrambler added 
  // to reorder list and have random order.
  scrambler();
  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
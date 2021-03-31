// Assignment code here
var passwordType = {
  lowercase : "abcdefghijklmnopqrstuvwxyz",
  numeric : "0123456789",
  special : " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"',
  chosen : "",
};
passwordType.uppercase= passwordType.lowercase.toUpperCase();

var choosePasswordType = function (){
  passwordType.chosen = "";
  wantLowercase = window.confirm("Do you want lowercase letters in your password?");
  wantUppercase = window.confirm("Do you want uppercase letters in your password?");
  wantNumeric = window.confirm("Do you want numbers in your password?");
  wantSpecial = window.confirm("Do you want special characters in your password?");
  if (!wantLowercase && !wantUppercase && !wantSpecial && !wantNumeric){
    window.alert("Please choose at least one type (Lowercase, Uppercase, Numeric, Special) so a password can be generated.");
    choosePasswordType();
  }
  if (wantLowercase){
    passwordType.chosen += passwordType.lowercase;
  }
  if (wantUppercase){
    passwordType.chosen += passwordType.uppercase;
  }
  if (wantNumeric){
    passwordType.chosen += passwordType.numeric;
  }
  if (wantSpecial){
    passwordType.chosen += passwordType.special;
  }

};
var generatePassword=function(){
  
  choosePasswordType();
  
  
   return passwordType.chosen;
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

// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalClick = document.querySelector("#finalClick");
var numericalChars = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = document.getElementById("password");
  var passwordText = document.getElementById("password").value;
  var passwordLength = document.getElementById("passwordLength");
  var lowerCaseChecked = document.getElementById("option1");
  var upperCaseChecked = document.getElementById("option2");
  var numbersChecked = document.getElementById("option3");
  var specialsChecked = document.getElementById("option4");
  
    
  console.log(passwordLength.value);
  console.log(lowerCase.value);
  console.log(document.getElementById('option1').checked);
  console.log(document.getElementById('option2').checked);
  console.log(document.getElementById('option3').checked);
  console.log(document.getElementById('option4').checked);
  console.log(lowerCaseChecked.checked);
  console.log(lowerCaseChecked.checked === true);

  var chars = "";

  if (lowerCaseChecked.checked) {
    chars += lowerCase;
  } 
  
  if (upperCaseChecked.checked) {
    chars += upperCase;
  }

  if (numbersChecked.checked) {
    chars += numericalChars;
  } 
  
  if (specialsChecked.checked) {
    chars += specials;
  }

  for (var i = 0; i <= passwordLength.value; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    passwordText += chars.substring(randomNumber, randomNumber +1);
  }

  /*
  if (lowerCase.checked && upperCase.checked && numbers.checked && specials.checked) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

    for (var i = 0; i <= passwordLength.value; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      passwordText += chars.substring(randomNumber, randomNumber +1);
    }
   } else if (lowerCase.checked && upperCase.checked && numbers.checked) {
      var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

      for (var i = 0; i <= passwordLength.value; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        passwordText += chars.substring(randomNumber, randomNumber +1);
      }
  } else if (lowerCase.checked && upperCase.checked && specials.checked) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

      for (var i = 0; i <= passwordLength.value; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        passwordText += chars.substring(randomNumber, randomNumber +1);
      }
  } else if (lowerCase.checked && numbers.checked && specials.checked) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

    for (var i = 0; i <= passwordLength.value; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      passwordText += chars.substring(randomNumber, randomNumber +1);
    }
  } /*else if (lowerCase.checked && upperCase.checked && numbers.checked && specials.checked){

  }

  } else {

  }*/
  
  
  console.log(password);
  console.log(passwordText);
  console.log(passwordText.value);
  console.log (passwordLength.value);
  console.log (password.value);
  console.log (passwordText.string);

  
password.value = passwordText;
};

// Add event listener to generate button
generateBtn.addEventListener("click", event => {

  document.getElementById("password").value = "";

  event.preventDefault();

  $('#exampleModal').modal('show');
});

finalClick.addEventListener("click", event =>{
  event.preventDefault();

  writePassword();
});
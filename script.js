// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var specialCharacter = "!@#$%^&*"

function generatePassword() {
  var passwordSize = prompt('password has to be atleast 8 characters')
  if (passwordSize >= 8 && passwordSize <= 128) {
    console.log(passwordSize) 
    var checklowerCase = confirm("do you want lowercase in password")
    var checkupperCase = confirm("do you want uppercase in  password")
    var checknumber = confirm("do you want to add number in  password")
    var checkspecialCharacter = ("do you want to add specialcharacter in password")
    var finalpassword = ""
    if (checklowerCase){
      finalpassword = finalpassword + lowerCase[ Math.floor(Math.random()*26)]
    }
    if (checkupperCase){
      finalpassword = finalpassword + upperCase[ Math.floor(Math.random()*26)]  
    }
    if (checknumber){
      finalpassword = finalpassword + number[Math.floor(Math.random()*10)]
    }
    if (checkspecialCharacter){
      finalpassword = finalpassword + specialCharacter[Math.floor(Math.random()*8)]
    }



  }
  else {
    alert("invalid")
  }
  return finalpassword
}

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

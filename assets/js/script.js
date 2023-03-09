// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = 8;
var lCase = true;
var uCase = true;
var numChar = true;
var specChar = true;
var characters = "";

// Method below may not work
// const numbers = [0,1,2,3,4,5,6,7,8,9]
// const symbols = ["~","!","#","%","^","&","*"]
// const lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l",'m',"n","o","p","q","r","s","t","u","v","w","x","y","z"]
// const upCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

// console.log("I am not being ignored")

console.log;(lCase);
console.log;(uCase);
console.log;(numChar);
console.log;(specChar);

// console.log("Logs before me should've been printed")

// Write password to the #password input
function writePassword() {
  // Mine - I did this
  passLength = window.prompt("How long would you like your password")
    if (passLength < 8) {
      console.log(passLength);
      window.alert("Whoa there buddy, your password has to be greater than 8 characters.");
    } else if (passLength > 128) {
      console.log(passLength);
      window.alert("Uh...wow...Your password has be less than 128 characters.");  
    } else {
      console.log(passLength);
      window.alert("Yessir!");

      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    };


  function generatePassword() {

    if (window.confirm("Would you Like to Use lowercase characters?")) {
      lCase = true;
      characters += "abcdefghijklmnopqrstuvwxyz"
      console.log;(lCase);
      window.alert("Noted!");
    } else {
      lCase = false;
      console.log;(lCase);
      window.alert("Understood!");
    };

    if (window.confirm("Would you Like to Use UPPERCASE characters?")) {
      uCase = true;
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      console.log;(uCase);
      window.alert("Noted!");
    } else {
      uCase = false;
      console.log;(uCase);
      window.alert("Understood!");
    };

    if (window.confirm("Would you Like to Use numeric characters?")) {
      numChar = true;
      characters += "0123456789"
      console.log;(numChar);
      window.alert("Noted!");
    } else {
      numChar = false;
      console.log;(numChar);
      window.alert("Understood!");
    };

    if (window.confirm("Would you Like to Use special characters?")) {
      specChar = true;
      characters += "~!@#$%^&*()_+{}|[]<>,./?"
      console.log;(specChar);
      window.alert("Noted!");
    } else {
      specChar = false;
      console.log;(specChar);
      window.alert("Understood!");
    };

    // console.log("I am about to test booleans");
    
    // if (lCase) {
    //   characters += "abcdefghijklmnopqrstuvwxyz"
    //   console.log;("lCase is true");
    // } else {
    //   console.log;("lCase is false");
    // }
    // if (uCase) {
    //   characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //   console.log;("uCase is true");
    // } else {
    //   console.log;("uCase is false");
    // }
    // if (numChar) {
    //   characters += "0123456789"
    //   console.log;("numChar is true");
    // } else {
    //   console.log;("numChar is false");
    // }
    // if (specChar) {
    //   characters += "~!@#$%^&*()_+{}|[]<>,./?"
    //   console.log;("specChar is true");
    // } else {
    //   console.log;("specChar is false");
    };

    console.log("I should've tested booleans");

    // const password = Array.from(Array(26)).map( (_, i) => i + 97)
    // const lowCase = password.map(code => String.fromCharCode(code))
    // console.log(lowCase);
    // console.log(upCase);
    // console.log(numbers);
    // console.log(symbols);

    for (var i = 0, n = passLength; i < passLength; ++i) {
      reVal += characters.charAt(Math.floor(Math.random() * n))
    }
    return retVal;


    console.log("I have completely executed");

  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log("Where's the rest of it!")
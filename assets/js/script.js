// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = 8;
var lCase = 0;
var uCase = 0;
var numChar = 0;
var specChar = 0;
var characters = ``;
var textArea = document.querySelector("#password")

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
  passLength = prompt("How long would you like your password")
    if (passLength < 8) {
      console.log(passLength);
      alert("Whoa there buddy, your password has to be greater than 8 characters.");
    } else if (passLength > 128) {
      console.log(passLength);
      alert("Uh...wow...Your password has be less than 128 characters.");  
    } else {
      console.log(passLength);
      alert("Yessir!");

      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

      console.log("I have completely executed writePassword")
    };


  function generatePassword() {

    // Prompt for LowCase Characters
    if (window.confirm("Would you Like to Use lowercase characters?")) {
      lCase = 1;
      characters = `abcdefghijklmnopqrstuvwxyz`
      console.log;(lCase);
      alert("Noted!");
    } else {
      lCase = 0;
      console.log;(lCase);
      alert("Understood!");
    };

    // Prompt for UpCase Characters
    if (window.confirm("Would you Like to Use UPPERCASE characters?")) {
      uCase = 1;
      characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
      console.log;(uCase);
      alert("Noted!");
    } else {
      uCase = 0;
      console.log;(uCase);
      alert("Understood!");
    };

    // Prompt for Numeric Characters
    if (window.confirm("Would you Like to Use numeric characters?")) {
      numChar = 1;
      characters = `0123456789`
      console.log;(numChar);
      alert("Noted!");
    } else {
      numChar = 0;
      console.log;(numChar);
      alert("Understood!");
    };

    // Prompt for Special Characters
    if (window.confirm("Would you Like to Use special characters?")) {
      specChar = 1;
      characters = `~!@#$%^&*()_+{}|[]<>,./?`
      console.log;(specChar);
      alert("Noted!");
    } else {
      specChar = 0;
      console.log;(specChar);
      alert("Understood!");
    };

      // trouble-shooting log
      console.log("lCase = " + lCase)
      console.log("uCase = " + uCase)
      console.log("numChar = " + numChar)
      console.log("specChar = " + specChar)
      // console.log(characters)
    

      if (lCase + uCase + numChar + specChar == 0) {
        alert("Sorry, I can't make a password from nothing");
        return;
        console.log("Oops...I should've stopped")
      } else {
        for (var i = 0; i <= passLength; i++) {
          var randomNumber = Math.floor(Math.random() * passLength);
          password += characters.substring(randomNumber, randomNumber +1);
         };
      };
      // if (lCase + uCase + numChar + specChar == 0) {
      //   alert("Sorry, I can't make a password from nothing")
      //   return;
      //   console.log("Oops...I should've stopped")
      // };
      
      // for (var i = 0; i <= passLength; i++) {
      //   var randomNumber = Math.floor(Math.random() * chars.length);
      //   password += chars.substring(randomNumber, randomNumber +1);
      //  }

      // writePassword.password = ()
      
    
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

    // const password = Array.from(Array(26)).map( (_, i) => i + 97)
    // const lowCase = password.map(code => String.fromCharCode(code))
    // console.log(lowCase);
    // console.log(upCase);
    // console.log(numbers);
    // console.log(symbols);

    // for (var i = 0, n = passLength; i < passLength; ++i) {
    //   reVal += characters.charAt(Math.floor(Math.random() * n))
    // }
    // return retVal;

    console.log("The logged password: " + passLength.password)
    console.log("I have completely executed generatePassword");

  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

textArea.textContent = passLength.password

// console.log("Where's the rest of it!")